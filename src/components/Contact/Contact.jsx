import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div name='contact' className='contct-container'>
            <div className='contact-wrapper'>
                <h2> Get in touch!</h2>
                <div className="inner_container">
                    <div className="form-container">
                        <div className="left-container">
                            <div className="left-inner-container">
                                <h2>Let's Chat</h2>
                                <p>Reservations And General Info</p>
                                <br />
                                <p>Feel free to send a message in the contact form</p>
                            </div>
                        </div>
                        <div className="right-container">
                            <div className="right-inner-container">
                                <form action="#">
                                    <h2 className="lg-view">Enquire Us</h2>
                                    <h2 className="sm-view">Let's Chat</h2>
                                    <p>* Required</p>
                                    <div className="social-container">
                                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <input type="text" placeholder="Name *" />
                                    <input type="email" placeholder="Email *" />
                                    <input type="text" placeholder="Country" />
                                    <input type="phone" placeholder="Phone" />
                                    <textarea rows="4" placeholder="Message"></textarea>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
