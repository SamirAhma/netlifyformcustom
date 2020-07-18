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
      {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous" /> */}
      {/* <SEO title="Home" />
      <button onClick={() => setShowText(!showText)}>Send Feedback</button>
      {showText && <div className="rating">
        <form className="rating-form" name="feedback" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="">
          <input type="hidden" name="form-name" value="feedback" />
          <label htmlFor="happy">
            <input type="radio" name="rating" className="happy" id="happy" defaultValue="happy" defaultChecked disabled={disabled} />
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>
          </label>

          <label htmlFor="sad">
            <input type="radio" name="rating" className="sad" id="sad" defaultValue="sad" disabled={disabled} />
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
          </label>
          <p>
            <button type="submit" onClick={handleGameClick}>Submit</button>
          </p>
        </form>



      </div>} */}
      {/* 
    <form name="good feedback" method="post" data-netlify="true" data-netlify-honeypot="bot-field"  >
   
      <input type="hidden" name="good" value="good" />
      <input type="text" name="good comment" value="good" />
      <button type="submit" name="good"><i class="far fa-smile"></i></button>
      <button type="submit" name="bad"><i class="far fa-frown"></i></button>
    </form> */}
      {/* <form name="bad feedback " method="post" data-netlify="true" data-netlify-honeypot="bot-field"  >
     
      <input type="hidden" name="bad" value="bad" />
      <input type="text" name="bad comment" value="bad" />

      <button type="submit" name="bad"><i class="far fa-frown"></i></button>
    </form> */}

      {/* <form name="feedback" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

      
 */}

      {/* <div className="card">
      <div className="rating-container"> */}
      {/* <div className="rating-text">
          <p>I'm feeling...</p>
        </div> */}




      {/* </div>
    </div> */}





      {/* </form> */}
      {/* 
    <form name="feedback" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    
      <input type="hidden" name="form-name" value="feedback" />

      <p>
        <label>Message: <textarea name="bad feedback"></textarea></label>
      </p>
      <p>
        <button type="submit" name="bad">Submit</button>
      </p>
    </form> */}

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



          <div className="card">
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
