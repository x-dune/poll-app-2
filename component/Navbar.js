import Link from 'next/link';
import Router from 'next/router';

class Navbar extends React.Component {
    state = { searchQuery: this.props.searchQuery ? this.props.searchQuery : '' }

    handleSearch = (id) => {
        const title = document.getElementById(id).value;
        console.log('router push search');
        Router.push({ pathname: '/search', query: { title: title } });
    }

    handleSearchEnter = (e, id) => {
        if (e.keyCode === 13) {
            if (id === 'search-small') {
                const instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
                if (instance) {
                    instance.close();
                }
            };
            this.handleSearch(id);
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper deep-purple">
                        <Link href="/">
                            <a className="brand-logo">
                                <i className="material-icons" style={{ fontSize: "3.5rem" }}>poll</i>
                                <span className="hide-on-small-and-down">POLL_APP_2</span>
                            </a>
                        </Link>
                        <a href="#" data-target="mobile-sidenav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down mr-3">
                            <li><Link href="/new"><a className="btn yellow black-text waves-effect waves-light">Create New Poll</a></Link></li>
                            <li><Link href="/about"><a>About</a></Link></li>
                            <li className="ml-2 mr-0">
                                <input id="search-med" type="search" placeholder="Search" className="white-text"
                                    onKeyDown={(e) => this.handleSearchEnter(e, 'search-med')}
                                    value={this.state.searchQuery}
                                    onChange={(e) => this.setState({ searchQuery: e.target.value })}
                                />
                            </li>
                            <li>
                                <a className="btn yellow black-text ml-1 waves-effect waves-light" onClick={() => this.handleSearch('search-med')}>
                                    <i className="material-icons center">search</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-sidenav">
                    <li className="mx-2">
                        <div className="row mb-0">
                            <div className="col s10 px-0">
                                <input type="search" id="search-small" placeholder="Search"
                                    onKeyDown={(e) => this.handleSearchEnter(e, 'search-small')}
                                    value={this.state.searchQuery}
                                    onChange={(e) => this.setState({ searchQuery: e.target.value })}
                                />
                            </div>
                            <div className="col s2 px-0">
                                <button className="btn yellow black-text ml-1 sidenav-close" onClick={() => this.handleSearch('search-small')}>
                                    <i className="material-icons center">search</i>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/new">
                            <a className="sidenav-close"><i className="material-icons left ml-0 mr-1">add</i> Create New Poll</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="sidenav-close">About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;