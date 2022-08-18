import React, { useRef, useState } from "react";
import "./Contact.css";
import phone from "../img/phone.png";
import email from "../img/email.png";
import address from "../img/address.png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zlsx1ph",
        "template_47p76ji",
        formRef.current,
        "9F6k6_-12-814GAZ4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">You can Contact me From here</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +91 9834477012
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Sindhudurg,Maharashtra
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              abhishekbhosale1025@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          {/* <p className="c-desc">
            <b>
              Whats Your Story ?  </b> From here you can contact me just 
              Fill the details 
              and Click on Submit button Thankyou.....
           
          </p> */}
          <form action="" ref={formRef} onSubmit={handleSubmit}>
            <h1 id="contacttt">Contact</h1>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea
              coloms="10"
              rows="5"
              placeholder="Message"
              name="message"
            />
            <br />
            <button id="contactBtn">Submit</button>
            {done && "Thank You for Contacting me..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
