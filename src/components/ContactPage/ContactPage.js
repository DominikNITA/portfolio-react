import React from "react";
import "./contactPage.css";

//TODO: create contact me page
const ContactPage = () => {
  return (
    <div id="contact-page" class="circles-background">
      <h2>Contact me!</h2>
      <div id="contact">
        <div id="contact__email">
          Email:
          <span> dominik.nita@gmail.com</span>
        </div>
        <div>
          or drop me a message on{" "}
          <a
            href="https://github.com/DominikNITA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/dominik-nita-415296151/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
