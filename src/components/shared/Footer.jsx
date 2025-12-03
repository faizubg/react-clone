import React from 'react'
import "../../css/footer.css"

function Footer() {
  return (
    <div>
      <footer>
  <div className="footer-container">
    <div className="footer-about">
      <h2>GeekInk</h2>
      <p>Complete digital education for Northern Nigeria. learning that works online & offline.</p>
      <ul className="contact-info">
        <li>📞 +234 813 355 6494</li>
        <li>📞 +234 813 355 6494</li>
        <li>📧 info@geekink.ng</li>
        <li>📍 Northern Nigeria</li>
      </ul>
    </div>
    <div className="footer-links">
      <div>
        <h3>Courses</h3>
        <ul>
          <li>Full Stack Development</li>
          <li>Python Programming</li>
          <li>Mobile Development</li>
          <li>All Courses</li>
        </ul>
      </div>
      
      <div>
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Our Team</li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
    <div className="chat-button">
      <button>💬 Chat with Us</button>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 GeekInk. All rights reserved. Empowering Northern Nigeria with digital education.</p>
    <div className="social-icons">
      <span>
        <i className="fa-brands fa-facebook-f "></i>
      </span>
      <span>
        <i className="fa-brands fa-twitter"></i>
      </span>
      <span>
        <i className="fa-brands fa-linkedin"></i>
      </span>
    </div>
    <div className="footer-policy">
      <span>Privacy</span>
      <span>Terms</span>
      <span>Cookies</span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer