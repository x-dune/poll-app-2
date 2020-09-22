import Layout from "../component/Layout"
import Error_View from "../component/Error_View"

const Error = (props) => {
  return (
    <Layout>
      <Error_View statusCode={props.statusCode} />
    </Layout>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
