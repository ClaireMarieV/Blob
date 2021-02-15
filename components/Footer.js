import React from "react";

const Footer = ({ children }) => (
  <div className="footer">
    <img src="WaveBlob.svg" />
    <style jsx>{`
      .container {
        width: 100%;
        display: grid;
        margin-top: 2rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    `}</style>
  </div>
);
export default Footer;
