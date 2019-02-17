const Error404 = () => {
    return (
        <div>
            <h1 className="center-align">404 <span style={{ color: 'red' }}>|</span> Not Found</h1>
        </div>
    )
}

const Error_View = (props) => {
    return (
        <div>
            {!props.statusCode
                ? <h4 className="center-align">Umm...an error occurred on client</h4> : props.statusCode === 404 ?
                    <Error404 /> :
                    <h4 className="center-align">Whoops...an error <strong>{props.statusCode}</strong> occurred on the server</h4>}
        </div>
    );
}

export default Error_View;