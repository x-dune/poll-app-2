import Link from "next/link"
import { pctString, colorClasses } from "../utility"

const Poll_View_Individual = (props) => {
  return (
    <Link href={`/poll/${props.poll._id}`}>
      <a>
        <div className="card grey lighten-5 z-depth-3 black-text">
          <div className="card-content">
            <span className="card-title">{props.poll.title}</span>
            <ul className="collection">
              {props.poll.options.map((option, index) => {
                const pct = pctString(option.vote, props.totalVote)
                return (
                  <li className="collection-item grey lighten-3" key={index}>
                    {props.totalVote === 0 ? (
                      <div className="row mb-0">
                        <div className="col s8 l9">{option.name}</div>
                        <div className="col s4 l3">{pct}</div>
                      </div>
                    ) : (
                      <div className="row mb-0">
                        <div className="col s10">
                          {option.name}
                          <div className="progress white">
                            <div
                              className={`determinate 
                                                        ${
                                                          colorClasses[
                                                            index %
                                                              colorClasses.length
                                                          ]
                                                        }`}
                              style={{ width: pct.replace(/<|>/, "") }}
                            ></div>
                          </div>
                        </div>
                        <div className="col s2">
                          <h6>{pct}</h6>
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </a>
    </Link>
  )
}

const Poll_View = (props) => {
  return (
    <div>
      {props.polls.map((poll, index) => {
        const totalVote = poll.options
          .map((elem) => elem.vote)
          .reduce((acc, curr) => acc + curr)
        return (
          <Poll_View_Individual key={index} poll={poll} totalVote={totalVote} />
        )
      })}
    </div>
  )
}

export default Poll_View
