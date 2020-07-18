import React, { useState } from "react"
import AskQuestion from "../components/askQuestion"

import Modal from "../components/modal"


const IndexPage = () => {
  // const [showText, setShowText] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // function handleGameClick(e) {

  //   setDisabled(!disabled);
  // }



  return (
    <>


      <div className="container" style={{ marginTop: "70px" }}>

        <AskQuestion></AskQuestion>



        <Modal buttonLabel="Send Feedback"></Modal>




        {/* dummy form so netlify able to detect the form for popu.The name of the form need to be same with the form in the popup */}
        <div className="card" style={{ display: "none" }}>
          <form name="Positive Feedback For Service" method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
            <input type="hidden" name="form-name" value="Positive For Feedback Service" />
            {/* <label for="message">If you have a minute more, can you share a sentence or two about how this website helped you?</label> */}

            <input type="textarea" class="form-control" id="message" name="message" placeholder="Your feedback here ..." />
            <button class="btn" style={{ background: "#420EFF" }} type="submit">Submit</button>

          </form>

          <form name="Negative Feedback For Service" method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
            <input type="hidden" name="form-name" value="Negative Feedback For Service" />
            {/* <label for="message">If you have a minute more, can you share a sentence or two about how this website helped you?</label> */}
            <input type="textarea" class="form-control" id="message" placeholder="Your comments here..." row="3" cols="3" name="message" />

            <button class="btn btn-primary" type="submit">Submit</button>

          </form>
        </div>
      </div>


    </>
  )
}

export default IndexPage
