import fetch from 'isomorphic-unfetch';
import Poll_View from '../component/Poll_View';
import Layout from '../component/Layout';
import Error_View from '../component/Error_View';
import { urlConfig } from '../utility';

let chart;

const Poll = (props) => {
    return (
        <Layout>
            {
                props.poll ?
                    <Poll_View 
                    poll={props.poll} 
                    />
                    :
                    <Error_View statusCode={props.statusCode} />
            }
        </Layout>

    );
}

Poll.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`${urlConfig.protocol}://${urlConfig.host}/api/polls/${id}`);
    if (res.status === 200) {
        const data = await res.json();
        data.id = id;
        return { poll: data };
    } else {
        const statusCode = res ? res.status : null;
        return { statusCode }
    }
};

export default Poll;