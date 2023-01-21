import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="layout">
    <link rel="stylesheet" href="https://use.typekit.net/bwz5hff.css"></link>
    <div
      style={{
        margin: `0 auto`,
      }}
    >
      <main>{children}</main>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.0/paper-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>
    {process.env.FATHOM && (
      <script
        src="https://cdn.usefathom.com/script.js"
        site={process.env.FATHOM}
        defer
      ></script>
    )}
    <style jsx global>
      {`
        html,
        body {
          margin: 0;
          padding: 0;
        }
        body {
          font-family: arboria, sans-serif;
          font-weight: 200;
          color: #fcf7f5;
          background-color: #151515;
          letter-spacing: 0.03rem;
        }
        ::-webkit-scrollbar {
          scrollbar-width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: rgba(79, 71, 78, 0.8);
        }

        header {
          margin-top: 1rem;
        }
        img {
          width: 100%;
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: #ffff;
        }
        h1 {
          font-family: raleway, sans-serif;
          font-weight: 700;
          font-style: normal;
        }

        h2,
        h4 {
          margin-bottom: 0.5rem;
          margin-top: 0;
        }
        p {
          padding: 2em;
          text-align: justify;
        }
        p > a {
          color: #edc0b2;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        ul {
          list-style: none;
        }
        button {
          background: transparent;
          font-family: arboria, sans-serif;
        }

        label {
          font-size: 1.3rem;
        }
        input {
          border: none;
          font-weight: 600;
          font-size: 1.2rem;
          background: transparent;
        }

        //SLIDER INPUT RANGE
        input[type="range"] {
          -webkit-appearance: none;
          padding: 0;
          background: #ebf9f4;
          cursor: pointer;
          height: 0.25rem;
          max-width: 20rem;
        }

        //CURSEUR INPUT RANGE
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          border-radius: 50%;
          width: 1.1rem;
          height: 1.1rem;
          background: #63d0aa;
          cursor: pointer;
        }
      `}
    </style>
  </div>
);

export default Layout;
