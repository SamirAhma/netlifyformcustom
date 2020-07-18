import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [disabled, setDisabled] = useState(true);
    function handleGameClick(e) {
        // e.preventDefault()
        setDisabled(!disabled);
    }


    const toggle = () => setModal(!modal);


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
            }} onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} >
                <div className="" style={showText || showText1 ? { display: "none" } : {}} >
                    <div className="text-center mt-1 mb-5" toggle={toggle}>

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
                                }} onClick={() => setShowText(!showText)}>Good so far!</Button>
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
                                }} onClick={() => setShowText1(!showText1)}>It could have been better</Button>
                            </p>

                        </div>

                    </div>

                </div>
                <div className="" style={showText ? {} : { display: "none" }}>
                    <div className="rating">
                        <form className="rating-form" action="" method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="Positive Feedback For Service" >

                            <ModalHeader toggle={toggle}>Awesome!</ModalHeader>
                            <ModalBody>
                                <div className="text-center">
                                    <input type="hidden" name="form-name" value="Positive Feedback For Service" />

                                    <label for="message">If you have a minute more, can you share a sentence or two about how this website helped you?</label>
                                    <input type="textarea" class="form-control" id="message" name="message" placeholder="Your feedback here ..." />

                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <p>
                                    <button style={{ background: "#420EFF", color: "white", textTransform: "uppercase", fontWeight: "bold" }} type="submit" className="btn btn-dark">Submit</button>
                                </p>
                            </ModalFooter>
                        </form>


                    </div>
                </div>



                <div className="" style={showText1 ? {} : { display: "none" }}>
                    <div className="rating">
                        <form className="rating-form" name="Negative Feedback For Service" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="">

                            <ModalHeader toggle={toggle}>We're sorry. :(</ModalHeader>
                            <ModalBody>    <label for="message">What went wrong?</label>
                                <input type="hidden" name="form-name" value="Negative Feedback For Service" />
                                <input type="textarea" class="form-control" id="message" placeholder="Your comments here..." row="3" cols="3" name="message" />
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
    );
}

export default ModalExample;