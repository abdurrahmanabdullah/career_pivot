import './contact.css';
import Header from "../Header/header"; 
import Footer from "../Footer/footer";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <Header />
      <div className="contact-info">
        <p style={{
          textAlign: "center",
          paddingRight: "30%"
        }}>
          If you’ve got any questions, please fill out the short form to drop
          us an email and we promise to get back to you in lightning speed.
        </p>
      </div>
      <div style={{marginRight:"20%"}} className="form-column">
        {/* Header text for the form */}
        <h2 style={{
          textAlign: "center",
          marginBottom: "20px",
          color:"black"
        }}>
         Have questions?<br/>Contact our support teams
        </h2>
        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
