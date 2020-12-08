import React from "react";

const Parameters = ({ pointCount, onPointCountChange }) => (
  <div className="parameters">
    <label>Nombre de points</label>
    <input
      type="range"
      min="3"
      max="50"
      id="points-count"
      value={pointCount}
      onChange={(event) => onPointCountChange(event.target.value)}
    ></input>
    <style jsx>{`
      .parameters {
        display: flex;
        flex-direction: column;
        width: 45vw;
        margin: auto;
      }
      points-count {
        width: 100%;
      }
    `}</style>
  </div>
);

export default Parameters;
