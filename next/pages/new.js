import Layout from "../component/Layout"
import Router from "next/router"
import { randomId } from "../utility"

class New extends React.Component {
  state = {
    options: 2,
  }

  componentDidMount() {
    M.CharacterCounter.init(document.querySelectorAll("textarea[data-length]"))
  }

  handleAddMoreOptions = (e) => {
    e.preventDefault()
    const divId = randomId()

    const div = document.createElement("div")
    div.id = divId
    div.classList = "row my-0"
    div.innerHTML = `
        <div class="col s10 input-field pl-0 my-1">
            <textarea class="materialize-textarea" data-length="256" name="input-option" id="input-option-${divId}"></textarea>
            <label for="input-option-${divId}">Additional Option</label>
        </div>`

    const div2 = document.createElement("div")
    div2.classList = "col s2 input-field my-0"

    const btn = document.createElement("button")
    btn.className = "btn red"
    btn.innerHTML = '<i class="material-icons">close</i>'

    btn.addEventListener("click", () => {
      document.getElementById(divId).remove()
      const options = this.state.options
      this.setState({ options: options - 1 })
    })

    div2.appendChild(btn)
    div.appendChild(div2)
    document.getElementById("more-options").appendChild(div)

    const options = this.state.options
    if (options + 1 === 32) {
      M.toast({
        html: "Maximum number of additional options reached!",
        classes: "yellow black-text",
        displayLength: 6000,
      })
    }
    this.setState({ options: options + 1 })
    M.CharacterCounter.init(
      document.querySelectorAll(`textarea#input-option-${divId}`),
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()

    document.getElementById("btn-submit").disabled = true

    function errorHandler(message, displayLength) {
      M.toast({
        html: message,
        displayLength: displayLength,
        classes: "red white-text",
      })
      document.getElementById("btn-submit").disabled = false
    }

    const title = document.getElementById("input-title").value

    if (!title) {
      return errorHandler("The poll must have a Title", 32000)
    }

    if (title.length > 512) {
      return errorHandler("The poll's Title cannot exceed 512 characters", 6000)
    }

    const options = [...document.querySelectorAll('[name="input-option"]')]
      .map((elem) => elem.value.trim())
      .filter((elem) => elem)

    if (options.length < 2) {
      return errorHandler("The poll needs AT LEAST 2 valid options!", 7000)
    }

    for (let i = 0; i < options.length; i++) {
      if (options[i].length > 256) {
        return errorHandler(
          `The options "${options[i].name}" has exceeded 256 characters`,
          7000,
        )
      }
    }

    for (let i = 0; i < options.length - 1; i++) {
      for (let j = i + 1; j < options.length; j++) {
        if (options[i] === options[j]) {
          return errorHandler(
            "The poll must NOT have 2 or more identical options!",
            7000,
          )
        }
      }
    }

    M.toast({
      html: "Successs!!!1",
      classes: "green white-text",
    })

    fetch("/api/polls", {
      method: "POST",
      body: JSON.stringify({ title, options }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200 && res.redirected) {
          Router.push(res.url)
        } else {
          return errorHandler("3200: Internal Server Error")
        }
      })
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <Layout>
        <div className="card mt-5">
          <div className="card-content">
            <form className="mt-32">
              <div className="input-field">
                <textarea
                  className="materialize-textarea"
                  id="input-title"
                  placeholder="Title for the pole"
                  data-length="512"
                ></textarea>
                <label htmlFor="input-title" className="active">
                  Title
                </label>
              </div>
              <div className="input-field">
                <textarea
                  className="materialize-textarea"
                  name="input-option"
                  data-length="256"
                ></textarea>
                <label htmlFor="input-option-1">Option 1</label>
              </div>
              <div className="input-field">
                <textarea
                  className="materialize-textarea"
                  name="input-option"
                  data-length="256"
                ></textarea>
                <label htmlFor="input-option-2">Option 2</label>
              </div>
              <div id="more-options" className="mb-2"></div>
              <button
                className="btn waves-effect waves-light yellow black-text accent-4"
                disabled={this.state.options < 32 ? false : true}
                onClick={(e) => this.handleAddMoreOptions(e)}
              >
                <i className="material-icons left">add</i>
                Add More Options
                {this.state.options < 32
                  ? ` (${32 - this.state.options} left)`
                  : null}
              </button>
              <br />
              <br />
              <button
                className="btn-large waves-effect waves-light yellow black-text accent-4"
                type="submit"
                id="btn-submit"
                onClick={(e) => this.handleSubmit(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default New
