


import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios"
import * as qs from "query-string"
import PositiveFeedback from "./Feedbacks/ServicePositive"
export default class modal extends Component {
    constructor(props) {
        // Do intro stuff ...
        super(props)
        this.domRef = React.createRef()
        this.state = {
            feedbackMsg: null,
            modal: false,
            showNegativeFeedback: false,
            showPositiveFeedback: false

        }

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

            method: "post",

            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
            //############### need to change url // url: this.props.location.pathname,
            url: "https://nostalgic-spence-60f3f1.netlify.app"
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



    toggle = () => {
        console.log(this.state.modal)

        this.setState({
            modal: !this.state.modal
        })

    }

    render() {

        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" ></link>
                <Button style={{
                    background: "#fff",
                    border: ".05rem solid #5627ff",
                    borderRadius: ".2rem",
                    color: "#5627ff",
                    cursor: "pointer",
                    display: "inline-block",
                    fontSize: ".7rem",
                    fontWeight: "700",
                    height: "1.4rem",
                    lineHeight: "1.2rem",
                    outline: 0,
                    padding: ".05rem .3rem",
                    textAlign: "center",
                    textDecoration: "none",
                    transition: " background .2s,border .2s,box-shadow .2s,color .2s",


                    userSelect: "none",
                    verticalAlign: "middle",
                    whiteSpace: "nowrap"
                }} onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <div className="" style={this.state.showNegativeFeedback || this.state.showPositiveFeedback ? { display: "none" } : {}} >
                        <div className="text-center mt-1 mb-5" toggle={this.toggle}>

                            <h5>  How was your experience with papergov?</h5>
                        </div>

                        <div className="" style={{ textAlign: "center" }}>
                            <div className="text-center">
                                <p>
                                    <Button style={{
                                        background: "#fff",
                                        border: ".05rem solid #5627ff",
                                        borderRadius: ".2rem",
                                        color: "#5627ff",
                                        cursor: "pointer",
                                        display: "inline-block",
                                        fontSize: ".9rem",
                                        fontWeight: "700",
                                        height: "2rem",
                                        lineHeight: "1.2rem",
                                        outline: 0,
                                        padding: ".35rem .6rem",
                                        textAlign: "center",
                                        textDecoration: "none",
                                        transition: " background .2s,border .2s,box-shadow .2s,color .2s",


                                        userSelect: "none",
                                        verticalAlign: "middle",
                                        whiteSpace: "nowrap"
                                    }} onClick={() => this.setState({
                                        showPositiveFeedback: !this.state.showPositiveFeedback
                                    })}>Good so far!</Button>
                                </p>




                                <p>

                                    <Button style={{
                                        background: "#fff",
                                        border: ".05rem solid #5627ff",
                                        borderRadius: ".2rem",
                                        color: "#5627ff",
                                        cursor: "pointer",
                                        display: "inline-block",
                                        fontSize: ".9rem",
                                        fontWeight: "700",
                                        height: "2rem",
                                        lineHeight: "1.2rem",
                                        outline: 0,
                                        padding: ".35rem .6rem",
                                        textAlign: "center",
                                        textDecoration: "none",
                                        transition: " background .2s,border .2s,box-shadow .2s,color .2s",


                                        userSelect: "none",
                                        verticalAlign: "middle",
                                        whiteSpace: "nowrap"
                                    }} onClick={() => this.setState({
                                        showNegativeFeedback: !this.state.showNegativeFeedback
                                    })}>It could have been better</Button>
                                </p>

                            </div>

                        </div>

                    </div>



                    <div className="" style={this.state.showPositiveFeedback ? {} : { display: "none" }}>
                        {/* <div className="rating">
                            {this.state.feedbackMsg && <p style={{ color: "#420EFF" }}>{this.state.feedbackMsg}</p>}
                            <form className="rating-form" ref={this.domRef} name="FeedbackServicePositive" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)} >

                                <ModalHeader toggle={this.toggle}>Awesome!</ModalHeader>
                                <ModalBody>
                                    <div className="text-center">
                                        <input ref="form-name" type="hidden" name="form-name" value="FeedbackServicePositive" />

                                        <label for="message">If you have a minute more, can you share a sentence or two about how this website helped you?</label>
                                        <input ref="message" type="textarea" class="form-control" id="message" name="message" placeholder="Your feedback here ..." />

                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <p>
                                        <button style={{ background: "#420EFF", color: "white", textTransform: "uppercase", fontWeight: "bold" }} type="submit" className="btn btn-dark">Submit</button>
                                    </p>
                                </ModalFooter>
                            </form>


                        </div> */}

                        <PositiveFeedback />
                    </div>



                    <div className="" style={this.state.showNegativeFeedback ? {} : { display: "none" }}>
                        <div className="rating">
                            {this.state.feedbackMsg && <p style={{ color: "#420EFF" }}>{this.state.feedbackMsg}</p>}
                            <form className="rating-form" ref={this.domRef} name="FeedbackServiceNegative" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)} >

                                <ModalHeader toggle={this.toggle}>We're sorry. :(</ModalHeader>
                                <ModalBody>    <label for="message">What went wrong?</label>
                                    <input ref="form-name" type="hidden" name="form-name" value="FeedbackServiceNegative" />
                                    <input ref="message" type="textarea" class="form-control" id="message" placeholder="Your comments here..." row="3" cols="3" name="message" />
                                </ModalBody>

                                <ModalFooter>
                                    <p>
                                        <button style={{ background: "#420EFF", color: "white", textTransform: "uppercase", fontWeight: "bold" }} type="submit" className="btn btn-dark">Submit</button>
                                    </p>
                                </ModalFooter>
                            </form>



                        </div>
                    </div>

                </Modal>
            </div>
        )
    }
}
