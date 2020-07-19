import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios"
import * as qs from "query-string"
export default class ServicePositive extends Component {
    constructor(props) {
        // Do intro stuff ...
        super(props)
        this.domRef = React.createRef()
        this.state = {
            feedbackMsg: null,


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
    render() {
        return (
            <>
                <div className="rating">

                    <form className="rating-form" ref={this.domRef} name="FeedbackServiceNegative" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)} >

                        <ModalHeader toggle={this.toggle}>We're sorry. :(</ModalHeader>
                        <ModalBody>
                            {this.state.feedbackMsg && <p style={{ color: "#420EFF" }}>{this.state.feedbackMsg}</p>}
                            <label for="message">What went wrong?</label>
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

            </>
        )
    }
}
