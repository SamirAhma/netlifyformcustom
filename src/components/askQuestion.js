import React from 'react'

export default function askQuestion() {
    return (
        <>
            <div className="faq">
                <div class="card" >

                    <div class="card-body">
                        <h5 class="card-title">Ask a Question</h5>

                        <form name="AskQuestion" method="post" data-netlify="true" data-netlify-honeypot="bot-field" target="__blank" action="">
                            <input type="hidden" name="form-name" value="AskQuestion" />
                            <input type="textarea" class="form-control" id="message" name="question" placeholder="What is your question?" required />
                            <div className="mt-2">

                                <button class="btn" style={{ background: "#420EFF", color: "white", textTransform: "uppercase", fontWeight: "bold" }} type="submit">Submit</button>
                            </div>


                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}
