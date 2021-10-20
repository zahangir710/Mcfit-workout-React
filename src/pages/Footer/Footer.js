import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container container my-5 text-center">
      <h4 className="text-center">follow us on social media</h4>
      <FaFacebook className="text-primary text-center fs-2 ms-2" />{" "}
      <FaGithub className="text-primary text-dark fs-2 ms-2" />
      <FaYoutube className="text-primary text-danger fs-2 ms-2" />
      <FaTwitter className="text-primary text-primary fs-2 ms-2" />
    </div>
  );
};

export default Footer;
