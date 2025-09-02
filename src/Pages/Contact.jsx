import "../Style.css";
import emailjs from "emailjs-com";

export default function Contact() {
  
  // function to send email
  function sendEmail(e) {
  e.preventDefault();

  emailjs
      .sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("✅ Success:", result.text);
        alert("✅ Message sent successfully!");
      },
      (error) => {
        console.error("❌ Error:", error.text);
        alert("❌ Failed to send. Please try again.");
      }
    );

  e.target.reset(); // Clear form after submission
}


  return (
    <section className="contact" id="Contact">
      <h2>
        Get In <span>Touch</span>
      </h2>
      <p>Feel free to reach out anytime. I’d be happy to connect with you.</p>

      <div className="contact-container">
        {/* Left: Form */}
        <div className="contact-form">
          <h3>Send Message</h3>
          <form onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>
            <button type="submit" className="btn-submit">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <div className="info-box">
            <i className="fas fa-envelope"></i>
            <span>Email: sudarshankolhe04@gmail.com</span>
          </div>
          <div className="info-box">
            <i className="fas fa-phone"></i>
            <span>Phone: +91 8999186611</span>
          </div>
          <div className="info-box">
            <i className="fas fa-map-marker-alt"></i>
            <span>Location: Pune, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
