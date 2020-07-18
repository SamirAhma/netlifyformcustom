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
            <Button color="dark" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <div className="" style={showText || showText1 ? { display: "none" } : {}} >
                    <ModalHeader toggle={toggle}>How was your experience with papergov?</ModalHeader>
                    {/* <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody> */}
                    <div className="" style={{ textAlign: "center" }}>
                        <ModalBody>
                            <p>
                                <Button color="primary" onClick={() => setShowText(!showText)}>Good so far!</Button>
                            </p>




                            <p>

                                <Button color="primary" onClick={() => setShowText1(!showText1)}>It could have been better</Button>
                            </p>
                        </ModalBody>
                    </div>
                    <ModalFooter>

                    </ModalFooter>
                </div>
                <div className="" style={showText ? {} : { display: "none" }}>
                    <div className="rating">
                        <form className="rating-form" action="" method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="badfeedback" >

                            <ModalHeader toggle={toggle}>Awesome!</ModalHeader>
                            <ModalBody>
                                <input type="hidden" name="form-name" value="badfeedback" />

                                <label for="message">If you have a minute more, can you share a sentence or two about how this website helped you?</label>
                                <input type="textarea" class="form-control" id="message" name="bad-feedback" placeholder="Your feedback here ..." />
                            </ModalBody>

                            <ModalFooter>
                                <p>
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </p>
                            </ModalFooter>
                        </form>



                    </div>
                </div>



                <div className="" style={showText1 ? {} : { display: "none" }}>
                    <div className="rating">
                        <form className="rating-form" name="feedback" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="">

                            <ModalHeader toggle={toggle}>We're sorry. :(</ModalHeader>
                            <ModalBody>    <label for="message">What went wrong?</label>
                                <input type="textarea" class="form-control" id="message" placeholder="Your comments here..." row="3" cols="3" />
                            </ModalBody>

                            <ModalFooter>
                                <p>
                                    <button type="submit" className="btn btn-dark">Submit</button>
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