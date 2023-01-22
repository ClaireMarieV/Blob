import React from "react";

const Container = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 5rem;
        justify-items: center;
        width: fit-content;
        margin: auto;
        padding: 8rem 0;
        width: 75vw;
      }
    `}</style>
  </div>
);
export default Container;
