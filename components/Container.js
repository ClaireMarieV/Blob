import React from "react";

const Container = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        width: 100%;
        display: grid;
        margin: 2rem 0 2rem 0;
      }
    `}</style>
  </div>
);
export default Container;
