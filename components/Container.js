import React from "react";

const Container = ({ children }) => (
  <div className="container">
    {children}
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
export default Container;
