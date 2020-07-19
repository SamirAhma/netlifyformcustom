// import React from 'react'

// export default function askQuestion() {
//     return (
//         <>
//             <div className="faq">
//                 <div class="card" >

//                     <div class="card-body">
//                         <h5 class="card-title">Ask a Question</h5>

//                         <form name="AskQuestion" method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
//                             <input type="hidden" name="form-name" value="AskQuestion" />
//                             <input type="textarea" class="form-control" id="message" name="question" placeholder="What is your question?" required />
//                             <div className="mt-2">

//                                 <button class="btn" style={{ background: "#420EFF", color: "white", textTransform: "uppercase", fontWeight: "bold" }} type="submit">Submit</button>
//                             </div>

//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from "react"
import axios from "axios"
import * as qs from "query-string"

import Layout from "../components/layout"

class AskQuestion extends React.Component {
  constructor(props) {
    // Do intro stuff ...
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
  }

  handleSubmit(event) {
    // Do form submission stuff ...
    // Do not submit form via HTTP, since we're doing that via XHR request.
    event.preventDefault()
    // Loop through this component's refs (the fields) and add them to the
    // formData object. What we're left with is an object of key-value pairs
    // that represent the form data we want to send to Netlify.
    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    // Set options for axios. The URL we're submitting to
    // (this.props.location.pathname) is the current page.
    const axiosOptions = {
       url: this.props.location.pathname,
      method: "post",

      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
//       url: "https://jovial-carson-f1b19c.netlify.app",
    }

    // Submit to Netlify. Upon success, set the feedback message and clear all
    // the fields within the form. Upon failure, keep the fields as they are,
    // but set the feedback message to show the error state.
    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg: "Form submitted successfully!",
        })
        this.domRef.current.reset()
      })
      .catch(err =>
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      )
  }

  render() {
    return (
      <>
        <div className="faq">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Ask a Question</h5>

              {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}

              <form
                ref={this.domRef}
                name="Contact Form"
                method="POST"
                data-netlify="true"
                onSubmit={event => this.handleSubmit(event)}
              >
                <input type="hidden" name="form-name" value="AskQuestion" />
                <input
                  type="textarea"
                  class="form-control"
                  id="message"
                  name="question"
                  placeholder="What is your question?"
                  required
                />
                <div className="mt-2">
                  <button
                    class="btn"
                    style={{
                      background: "#420EFF",
                      color: "white",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AskQuestion
