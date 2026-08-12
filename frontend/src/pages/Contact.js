import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">

        <h2>Contact Us</h2>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
        />

        <label>Message</label>
        <textarea
          placeholder="Enter your message"
          rows="5"
        ></textarea>

        <button className="contact-btn">
          Send Message
        </button>

      </div>
    </div>
  );
}

export default Contact;