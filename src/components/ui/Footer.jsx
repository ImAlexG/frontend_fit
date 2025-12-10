import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="py-3"
      style={{ backgroundColor: "#6050DC", color: "white" }}
    >
      <div className="container text-center">
        {/* Quick Links Section */}
        <div className="mb-2">
          <Link to="/" className="text-white text-decoration-none mx-2">
            Home
          </Link>
          <Link to="/about" className="text-white text-decoration-none mx-2">
            About
          </Link>
          <Link to="/shop" className="text-white text-decoration-none mx-2">
            Fitness & Co
          </Link>
          <Link to="/contact" className="text-white text-decoration-none mx-2">
            Contact
          </Link>
        </div>

        {/* Social Media Icons Section */}
        <div className="mb-2">
          <a href="#" className="text-white mx-2" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white mx-2" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white mx-2" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Footer Text */}
        <div>
          <small>
            © {new Date().getFullYear()} Fitness & Co. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
