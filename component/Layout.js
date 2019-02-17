import Navbar from './Navbar';
import Head from 'next/head';
import '../scss/style.scss';
import '../scss/utilities.scss';

class Layout extends React.Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    };

    render() {
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <title>Poll App</title>
                </Head>
                <Navbar 
                searchQuery = {this.props.searchQuery}
                />
                <div className="container">
                    {this.props.children}
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </div>
        );
    };
}

export default Layout;