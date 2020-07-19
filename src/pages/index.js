import React from "react"
import AskQuestion from "../components/askQuestion"

import Modal from "../components/modal"


// Need to  install axios, query-string, reactstrap

const IndexPage = () => {



  return (
    <>


      <div className="container" style={{ marginTop: "70px" }}>

        {/* FAQ Components */}
        <AskQuestion></AskQuestion>


        {/* Button for the pop ups Components using reactstrap */}
        <Modal buttonLabel="Send Feedback"></Modal>




        {/* dummy form so netlify able to detect the form for popup.The name of the form need to be same with the form in the popup */}
        <div className="card" style={{ display: "none" }}>
          <form name="FeedbackServicePositive" method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
            <input type="hidden" name="form-name" value="FeedbackServicePositive" />

            <input type="textarea" class="form-control" id="message" name="message" placeholder="Your feedback here ..." />
            <button class="btn" style={{ background: "#420EFF" }} type="submit">Submit</button>

          </form>

        </div>
      </div>


      <form name="FeedbackServiceNegative" method="post" data-netlify="true" data-netlify-honeypot="bot-field" style={{ display: "none" }}>
        <input type="hidden" name="form-name" value="FeedbackServiceNegative" />

        <input type="textarea" class="form-control" id="message" placeholder="Your comments here..." row="3" cols="3" name="message" />

        <button class="btn btn-primary" type="submit">Submit</button>

      </form>

      {/* dummy form so netlify able to detect the form for popu.The name of the form need to be same with the form in the popup */}
    </>
  )
}

export default IndexPage
