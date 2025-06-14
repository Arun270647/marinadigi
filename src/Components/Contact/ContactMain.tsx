import React, { useState } from 'react';

const ContactMain: React.FC = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for submission status message
  const [formStatus, setFormStatus] = useState('');

  // Helper function to encode form data for Netlify
  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  // Handle form submission using JavaScript
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission and page reload

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setFormStatus("Thank you! Your message has been sent successfully.");
        // Clear the form fields after successful submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
      })
      .catch(error => {
        setFormStatus("Oops! There was an error submitting your form. Please try again.");
        console.error(error);
      });
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contact-main-inner-area sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading2 contact-header">
              <h5>Contact Us</h5>
              <h2>Get in Touch with Marina Digitals. We Value Your Connection</h2>
              <p>
                Our dedicated team is committed to providing prompt and effective support to ensure your needs are met. We believe in open communication and are always ready to listen. Reach out to us via phone, email, or live chat, or visit our office during business hours.
              </p>
              <div className="space32"></div>
              <div className="number-address-area">
                <div className="phone-number">
                  <div className="img1">
                    <img src="/assets/img/icons/phone3.svg" alt="Phone Icon" />
                  </div>
                  <div className="content">
                    <p>Phone Number</p>
                    <a href="tel:+919789903547">+91 97899 03547</a>
                  </div>
                </div>

                <div className="phone-number m-0">
                  <div className="img1">
                    <img src="/assets/img/icons/email3.svg" alt="Email Icon" />
                  </div>
                  <div className="content">
                    <p>Email Address</p>
                    <a href="mailto:info@marinadigitals.com">info@marinadigitals.com</a>
                  </div>
                </div>
              </div>
              <div className="space50"></div>
              <div className="number-address-area2">
                <div className="phone-number">
                  <div className="img1">
                    <img src="/assets/img/icons/location3.svg" alt="Location Icon" />
                  </div>
                  <div className="content">
                    <a href="#">
                        No/38/68a Palayakara Street, <br className="d-lg-block d-none" />
                        Ayanavaram, Chennai - 600 023
                    </a>
                  </div>
                </div>

                <div className="phone-number">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=No+38/68a+Palayakara+Street,Ayanavaram,Chennai"
                    className="map"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Our Map
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="contact-form-area">
              <h4>Get In Touch</h4>
              {/* - The form now calls our `handleSubmit` function.
                - The `action` and `method` attributes have been removed, as JS handles the submission.
              */}
              <form 
                name="contact" 
                onSubmit={handleSubmit}
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
              >
                {/* This hidden field is required by Netlify. */}
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}>
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="input-area">
                      <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="input-area">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input 
                        type="text"
                        name="phone" 
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea 
                        name="message" 
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <button type="submit" className="header-btn1">
                        Get In Touch <span><i className="fa-solid fa-arrow-right"></i></span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* This will now display a success or error message below the form */}
                {formStatus && <p style={{ marginTop: '15px', color: formStatus.startsWith('Oops') ? 'red' : 'green' }}>{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
