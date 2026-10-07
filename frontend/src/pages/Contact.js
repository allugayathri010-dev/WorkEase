import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (name.trim().length < 3) {
      setError("Please enter a valid name.");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone.trim())) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (message.trim().length < 10) {
      setError(
        "Message should contain at least 10 characters."
      );
      return;
    }

    const contactMessage = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const existingMessages =
      JSON.parse(
        localStorage.getItem("contactMessages")
      ) || [];

    localStorage.setItem(
      "contactMessages",
      JSON.stringify([
        ...existingMessages,
        contactMessage,
      ])
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setError("");
    setSuccess(
      "Thank you! Your message has been submitted successfully."
    );
  };

  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>

        <p>
          Have a question or need help? We are here to help.
        </p>
      </div>

      {/* Contact Content */}
      <div className="contact-content">

        {/* Contact Information */}
        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p className="contact-intro">
            If you have any questions about our services,
            bookings or payments, feel free to contact us.
          </p>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              📍
            </div>

            <div>
              <h3>Address</h3>
              <p>
                WorkEase Service Center
                <br />
                Visakhapatnam, Andhra Pradesh
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              📞
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              ✉️
            </div>

            <div>
              <h3>Email</h3>
              <p>support@workease.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              🕐
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          <p className="contact-form-description">
            Fill in the form below and our team will get back
            to you.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="contact-form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="contact-form-row">

              <div className="contact-form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone number"
                  maxLength="10"
                />
              </div>

              <div className="contact-form-group">
                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />
              </div>

            </div>

            <div className="contact-form-group">
              <label>Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                maxLength="500"
              />

              <small>
                {formData.message.length}/500
              </small>
            </div>

            {error && (
              <p className="contact-error">
                {error}
              </p>
            )}

            {success && (
              <p className="contact-success">
                {success}
              </p>
            )}

            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;