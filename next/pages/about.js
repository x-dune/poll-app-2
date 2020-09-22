import Layout from "../component/Layout"
import Link from "next/link"

const About = () => {
  return (
    <Layout>
      <div className="card mt-5">
        <div className="card-content">
          <span className="card-title center-align">
            About This Application
          </span>
          <blockquote className="py-1">
            <h6>Coded with &#10084;&#65039; & &#9749; by Adam Ho</h6>
          </blockquote>
          <ul>
            {[
              <p>
                This application is a responsive, single page application that
                was mainly built using the MERN stack (
                <Link href="https://www.mongodb.com/">
                  <a>MongoDB</a>
                </Link>
                ,{" "}
                <Link href="https://expressjs.com/">
                  <a>Express</a>
                </Link>
                ,{" "}
                <Link href="https://reactjs.org/">
                  <a>React</a>
                </Link>
                ,{" "}
                <Link href="https://nodejs.org/">
                  <a>Node</a>
                </Link>
                ).
              </p>,
              <p>
                React is rendered on the server-side using{" "}
                <Link href="https://nextjs.org/">
                  <a>Next.js</a>
                </Link>
                .
              </p>,
              <p>
                <Link href="https://mongoosejs.com/">
                  <a>Mongoose.js</a>
                </Link>{" "}
                was used as an Object Document Mapper for MongoDB.
              </p>,
              <p>
                Styled using the{" "}
                <Link href="https://materializecss.com/">
                  <a>Materialize</a>
                </Link>{" "}
                HTML/CSS framework and{" "}
                <Link href="https://getbootstrap.com/">
                  <a>Bootstrap</a>
                </Link>{" "}
                utility classes.
              </p>,
              <p>
                Donut chart was made using{" "}
                <Link href="https://www.chartjs.org/">
                  <a>Chart.js</a>
                </Link>
                .
              </p>,
            ].map((elem, index) => (
              <li
                key={index}
                style={{ listStyleType: "disc" }}
                className="ml-4"
              >
                {elem}
              </li>
            ))}
          </ul>
          <p className="mt-3 mr-3">
            Source code can be found{" "}
            <Link href="https://github.com/adamdune/poll_app_2">
              <a>here</a>
            </Link>{" "}
            (GitHub).
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
