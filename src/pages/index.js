import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous" />
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
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

    <form name="feedback" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="feedback" />

      <p>
        <label>Message: <textarea name="good feedback"></textarea></label>
      </p>
      <p>
        <button type="submit" name="good">Submit</button>
      </p>
    </form>

    <form name="feedback" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="feedback" />

      <p>
        <label>Message: <textarea name="bad feedback"></textarea></label>
      </p>
      <p>
        <button type="submit" name="bad">Submit</button>
      </p>
    </form>


    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
