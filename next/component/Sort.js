import Link from "next/link"

class Sort extends React.Component {
  componentDidMount() {
    if (this.props.render) {
      M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
        constraintWidth: false,
      })
    }
  }

  render() {
    return (
      <div>
        {this.props.render ? (
          <div className="right-align m-3">
            <button
              className="dropdown-trigger yellow black-text accent-3 btn"
              data-target="dropdown-sort"
            >
              Sort By
              <i className="material-icons right">arrow_drop_down</i>
            </button>

            <ul id="dropdown-sort" className="dropdown-content">
              {["Recently Created", "Recently Voted", "Most Voted"].map(
                (elem, index) => {
                  const queryStr = elem.toLowerCase().replace(" ", "_")
                  return (
                    <li
                      key={`sort${index}`}
                      className={
                        index === 0 && !this.props.query.sort
                          ? "yellow accent-3"
                          : queryStr === this.props.query.sort
                          ? "yellow accent-3"
                          : ""
                      }
                    >
                      <Link
                        href={{
                          pathname: this.props.pathname,
                          query: {
                            ...this.props.query,
                            sort: queryStr,
                          },
                        }}
                      >
                        <a className="black-text">{elem}</a>
                      </Link>
                    </li>
                  )
                },
              )}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Sort
