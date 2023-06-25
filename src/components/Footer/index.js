import React from "react";

import "./styles.css";

const Footer = (props) => {
  return (
    <div className="footer">
        <p className="footer__copyright">&copy;</p>
        <p className="footer__year">{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;