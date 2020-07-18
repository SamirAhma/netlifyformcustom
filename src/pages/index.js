import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import Modal from "../components/modal"


const IndexPage = () => {
  const [showText, setShowText] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleGameClick(e) {
    // e.preventDefault()
    setDisabled(!disabled);
  }



  return (
    <>


      <div className="container" style={{ marginTop: "70px" }}>
        <Modal buttonLabel="Send Feedback"></Modal>


        <div className="faq">
          <div class="card" >

            <div class="card-body">
              <h5 class="card-title">Ask a Question</h5>

              <form name="AskQuestion" method="post" data-netlify="true" data-netlify-honeypot="bot-field" target="__blank" action="">
                <input type="hidden" name="form-name" value="AskQuestion" />
                <input type="textarea" class="form-control" id="message" name="question" placeholder="What is your question?" />
                <button class="btn btn-primary" type="submit">Submit</button>

              </form>


            </div>
          </div>



          <div className="card" style={{ display: "none" }}>
            <form name="Hello" method="post" data-netlify="true" data-netlify-honeypot="bot-field" target="__blank" action="">
              <input type="hidden" name="form-name" value="Hello" />
              <input type="textarea" class="form-control" id="message" name="question" placeholder="What is your question?" />
              <button class="btn btn-primary" type="submit">Submit</button>

            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default IndexPage
