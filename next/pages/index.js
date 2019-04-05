import Layout from '../component/Layout';
import Pagination from '../component/Pagination';
import Sort from '../component/Sort';
import Polls_View from '../component/Polls_View';
import fetch from 'isomorphic-unfetch';
import { isEmptyArray, urlConfig } from '../utility';
import url from 'url';

const Index = (props) => {
    return (
        <Layout>
            <Sort
                pathname='/'
                query={{ ...props.query }}
                render={props.count > 1}
            />
            {isEmptyArray(props.polls) ?
                <div className="center-align">
                    <h3>No polls are available at the moment.</h3>
                </div>
                :
                <Polls_View polls={props.polls} />
            }
            <Pagination
                pages={Math.ceil(props.count / 10)}
                currentPage={props.query.page ? parseInt(props.query.page) : 1}
                pathname='/'
                query={{ ...props.query }}

            />
        </Layout>
    );
}
Index.getInitialProps = async ({ query }) => {
    if (query.title) {
        delete query.title;
    }
    const fetchUrl = url.format({
        protocol: urlConfig.protocol,
        host: urlConfig.host,
        pathname: '/api/polls',
        query: query
    })
    const res = await fetch(fetchUrl);
    const data = await res.json();
    return { polls: data.polls, count: data.count, query };
}

export default Index;