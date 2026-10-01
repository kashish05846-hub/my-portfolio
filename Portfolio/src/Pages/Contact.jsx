import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", form);

      setStatus("Your message has been sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      setStatus("Unable to send message. Please try again.");
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h1>Contact Me</h1>
        </div>

        <div className="contact-grid">
          <div className="contact-content">
            <h2>Let's build something great together.</h2>

            <p>
              Have a project idea, internship opportunity or collaboration in
              mind? Feel free to send me a message.
            </p>

            <div className="contact-info">
              <p>📧 your-email@gmail.com</p>

              <p>📍 India</p>

              <p>💻 MERN Stack Developer</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
