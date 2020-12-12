import React from "react";

const Container = ({ children }) => (
  <div className="container">
    <div className="title">
      <h1>ORGANIC BLOB</h1>
    </div>
    {children}
    <style jsx>{`
      .container {
        margin: 1rem;
      }
      .container .title {
        display: flex;
        justify-content: flex-start;
      }
    `}</style>
  </div>
);
export default Container;
