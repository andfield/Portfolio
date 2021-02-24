import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© Siddharth Shailesh Thakur &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;