import "../Style.css"
export default function Contact() {
  return (
    <section class="contact" id="contact">
  <h2>Get In <span>Touch</span></h2>
  <p>
    Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
  </p>

  <div class="contact-container">
    {/* <!-- Left: Form --> */}
    <div class="contact-form">
      <h3>Send Message</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit" class="btn-submit">
          <i class="fas fa-paper-plane"></i> Send Message
        </button>
      </form>
    </div>

    {/* <!-- Right: Contact Info --> */}
    <div class="contact-info">
      <h3>Contact Information</h3>
      <p>
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <div class="info-box">
        <i class="fas fa-envelope"></i>
        <span>Email: sudarshankolhe04@gmail.com</span>
      </div>
      <div class="info-box">
        <i class="fas fa-phone"></i>
        <span>Phone: +91 98765 43210</span>
      </div>
      <div class="info-box">
        <i class="fas fa-map-marker-alt"></i>
        <span>Location: Pune, India</span>
      </div>
    </div>
  </div>
</section>

  );
}
