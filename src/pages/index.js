import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="Like" value="contact" />
      <input type="text" name="Like" value="contact" />
      <button type="submit">Send</button>
    </form>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
