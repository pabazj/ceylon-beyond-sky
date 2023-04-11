import React , { useState }from 'react'
import './contact.css'

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        phone: "",
        message: "",
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Send form data to Formspree endpoint
        const response = await fetch("https://formspree.io/f/mbjeplza", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          console.log("Email sent successfully!");
          // Reset form data
          setFormData({
            name: "",
            email: "",
            country: "",
            phone: "",
            message: "",
          });
        } else {
          console.error("Failed to send email.");
        }
      };

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
                                <form onSubmit={handleSubmit}>
                                    <h2 className="lg-view">Enquire Us</h2>
                                    <h2 className="sm-view">Let's Chat</h2>
                                    <p>* Required</p>
                                    
                                    <input type="text" placeholder="Name *" name="name" value={formData.name} onChange={handleInputChange}/>
                                    <input type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleInputChange}/>
                                    <input type="text" placeholder="Country" name="country" value={formData.country} onChange={handleInputChange} />
                                    <input type="tel" placeholder="Phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                                    <textarea rows="4" placeholder="Message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
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
