import React from "react";
import DivColors from "../components/DivColors";

const Parameters = ({
  regeneratePoints,
  pointCount,
  onChangePointCount,
  color,
  onChangeColor,
  background,
  onChangeBackground,
}) => {
  return (
    <div className="parameters">
      <button onClick={(event) => regeneratePoints()}>
        Regénérer une forme
      </button>
      <label>Ondulation</label>
      <input
        type="range"
        min="3"
        max="5"
        id="points-count"
        value={pointCount}
        onChange={(event) => onChangePointCount(event.target.value)}
      ></input>

      <div>
        <label>
          Colors
          <input
            type="text"
            min="3"
            max=""
            id="colors"
            value={color}
            onChange={(event) => onChangeColor(event.target.value)}
          ></input>
        </label>
      </div>
      <DivColors
        value={background}
        onChange={(color) => onChangeColor(color)}
      />

      <style jsx>{`
        .parameters {
          display: flex;
          flex-direction: row;
          margin: auto;
          width: auto;
          padding: 1rem;
          justify-content: space-around;
        }
        .points-count {
          width: 100%;
        }
        .background-color {
          width: 50px;
        }
      `}</style>
    </div>
  );
};

export default Parameters;
