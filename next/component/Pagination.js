import Link from 'next/link';

const Pagination = (props) => {

    let renderPagination;

    if (props.pages > 1) {
        let pages = [];
        for (let i = 1; i <= props.pages; i++) {
            pages.push(
                <li className={`mx-1 ${i === props.currentPage ? "yellow accent-4 active" : "waves-effect"}`}
                    key={`pagination${i}`}>
                    <Link href={{ pathname: props.pathname, query: { ...props.query, page: i } }}>
                        <a className="black-text">{i}</a>
                    </Link>
                </li>);
        }
        renderPagination =
            <ul className="pagination center">
                {
                    props.currentPage === 1 ?
                        <li className="disabled">
                            <a><i className="material-icons">chevron_left</i></a>
                        </li>
                        :
                        <li className="waves-effect">
                            <Link href={{
                                pathname: props.pathname,
                                query: { ...props.query, page: props.currentPage - 1 }
                            }}>
                                <a><i className="material-icons">chevron_left</i></a>
                            </Link>
                        </li>
                }
                {pages}
                {
                    props.currentPage === props.pages ?
                        <li className="disabled">
                            <a href="#"><i className="material-icons">chevron_right</i></a>
                        </li>
                        :
                        <li className="waves-effect">
                            <Link href={{
                                pathname: props.pathname,
                                query: { ...props.query, page: props.currentPage + 1 }
                            }}>
                                <a><i className="material-icons">chevron_right</i></a>
                            </Link>
                        </li>
                }
            </ul>
    } else {
        renderPagination = null;
    }

    return (
        <div>
            {renderPagination}
        </div>
    );
}

export default Pagination;