import fetch from 'isomorphic-unfetch';
import { pctString, colorClasses, voteString, relativeDate, genColorHexes, dateTooltipString } from '../utility';

let chart;

class Poll_View extends React.Component {
    state = {
        totalVote: this.props.poll.options.map(elem => elem.vote).reduce((acc, curr) => acc + curr),
        votes: this.props.poll.options.map(elem => elem.vote),
        lastVotedOn : this.props.poll.lastVotedOn
    };

    renderChart = (votes) => {
        const ctx = document.getElementById("chart").getContext('2d');
        const Chart = require('chart.js');
        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: this.props.poll.options.map(elem => elem.name),
                datasets: [{
                    label: '# of Votes',
                    data: votes,
                    backgroundColor: genColorHexes(this.props.poll.options.length),
                    borderColor: 'rgba(100,100,100,0.5)',
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 35
            }
        });
    }

    componentDidMount() {
        if (this.state.totalVote) {
            this.renderChart(this.state.votes);
        }
        M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
    };

    handleSubmitVote = (e) => {
        e.preventDefault();
        document.getElementById('btn-vote').disabled = true;

        function errorHandler(message) {
            document.getElementById('btn-vote').disabled = false;
            M.toast({
                html: message,
                classes: 'red white-text',
                durationLength: 5000
            })
        }

        let voteIndex;
        let votedOption;
        [...document.querySelectorAll('[name="input-vote"]')].some((vote, index) => {
            if (vote.checked) {
                voteIndex = index;
                votedOption = vote.nextElementSibling.textContent;
                return true;
            }
        });

        if (voteIndex === undefined) {
            return errorHandler('You must select an option to vote!');
        };

        M.toast({
            html: `Congratulations, you've voted for ${votedOption ? '"' + votedOption + '"' : "something"}`,
            classes: 'green white-text'
        });

        fetch(`/api/polls/${this.props.poll.id}`, {
            method: 'PUT',
            body: JSON.stringify({ voteIndex }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.status === 200) {
                    let votes = [...this.state.votes];
                    votes[voteIndex]++;
                    this.setState({ totalVote: this.state.totalVote + 1, votes: votes, lastVotedOn: new Date() });
                    if (chart) {chart.destroy();}
                    this.renderChart(votes);
                } else {
                    return errorHandler('500: Internal Server Error')
                }
            })
            .catch(err => console.error(err));
    };

    render() {
        let chartContainer;
        let firstVoteMessage;
        let lastVotedOn;

        if (this.state.totalVote) {
            chartContainer =
                <div className="col s12" style={{ position: "relative", height: "50vh" }}>
                    <canvas id="chart"></canvas>
                </div>
            lastVotedOn = <h6>
                Last voted on :
            <span className="tooltipped" data-position="top"
                    data-tooltip={dateTooltipString(this.state.lastVotedOn)}> {relativeDate(this.state.lastVotedOn)}</span>
            </h6>
        } else {
            firstVoteMessage = <h5 className="center mb-3">Be the first to vote on this poll!!</h5>
        }
        return (
            <div className="card grey lighten-5 z-depth-3 black-text">
                <div className="card-content">
                    <span className="card-title center">{this.props.poll.title}</span>
                    <div className="row my-0">
                        {chartContainer}
                        <div className="col s12">
                            <ul className="collection">
                                {this.props.poll.options.map((option, index) => {
                                    const pct = pctString(this.state.votes[index], this.state.totalVote);
                                    return (
                                        <li className="collection-item grey lighten-3" key={index}>
                                            {!this.state.totalVote ?
                                                <div className="row my-0">
                                                    <div className="col s9">
                                                        <p>
                                                            <label>
                                                                <input type="radio" name="input-vote" className="with-gap" />
                                                                <span className="black-text">{option.name}</span>
                                                            </label>
                                                        </p>
                                                    </div>
                                                    <div className="col s3  right-align">
                                                        {pct}
                                                    </div>
                                                </div>
                                                :
                                                <div className="row my-0">
                                                    <div className="col s12 l10">
                                                        <p>
                                                            <label>
                                                                <input type="radio" name="input-vote" className="with-gap" />
                                                                <span className="black-text">{option.name}</span>
                                                            </label>
                                                        </p>
                                                        <div className="progress white">
                                                            <div className={`determinate 
                                                        ${colorClasses[index % colorClasses.length]}`}
                                                                style={{ width: pct.replace(/<|>/, "") }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col s12 l2">
                                                        <p>{pct}</p>
                                                        <p>{voteString(this.state.votes[index])}</p>
                                                    </div>
                                                </div>
                                            }
                                        </li>)
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                    <h6 className="right-align mr-5">Total Votes : {this.state.totalVote}</h6>
                    {firstVoteMessage}
                    <div className="center mb-3">
                        <button className="btn-large waves-effect waves-light yellow accent-4 black-text" id="btn-vote"
                            onClick={e => this.handleSubmitVote(e)}
                        >
                            <i className="material-icons left mr-2">arrow_upward</i>
                            Vote</button>
                    </div>
                    <h6>
                        Created on :
            <span className="tooltipped" data-position="top"
                            data-tooltip={dateTooltipString(this.props.poll.createdOn)}> {relativeDate(this.props.poll.createdOn)}</span>
                    </h6>
                    {lastVotedOn}
                </div>
            </div>
        );
    }
}

export default Poll_View;