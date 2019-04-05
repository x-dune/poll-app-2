import Layout from '../component/Layout';
import Pagination from '../component/Pagination';
import Sort from '../component/Sort';
import Polls_View from '../component/Polls_View';
import fetch from 'isomorphic-unfetch';
import { isEmptyArray, urlConfig } from '../utility';
import url from 'url';

const Search = (props) => {

    return (
        <Layout
        searchQuery = {props.query.title}
        >
            <Sort
            pathname ='/search'
            query = {{...props.query}}
            render = {props.count > 1}
            />
            <h5 className="center-align">Search results for "<b>{props.query.title}</b>"
                {isEmptyArray(props.polls) ? null : ` - (${props.polls.length} ${props.polls.length > 1? 'results' : 'result'})`}
            </h5>
            {isEmptyArray(props.polls) ?
                <div className="center-align">
                    <h3>No results found</h3>
                    <h5>Try a different keyword</h5>
                </div>
                :
                <Polls_View polls={props.polls} />
            }
            <Pagination
            pages={Math.ceil(props.count / 10)}
            currentPage={props.query.page ? parseInt(props.query.page) : 1}
            pathname = '/search'
            query = {{...props.query}}
            />
        </Layout>
    );
}
Search.getInitialProps = async ({ query }) => {
    const fetchUrl = url.format({
        protocol: urlConfig.protocol,
        host: urlConfig.host,
        pathname: '/api/polls',
        query: {...query}
    })
    const res = await fetch(fetchUrl);
    const data = await res.json();
    return { polls: data.polls, count: data.count, query };
}

export default Search;