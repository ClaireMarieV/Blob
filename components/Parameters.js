import React from "react";
import DivColors from "../components/DivColors";

const Parameters = ({
  pointCount,
  onChangePointCount,
  color,
  onChangeColor,
  background,
  onChangeBackground,
}) => {
  return (
    <div>
      <div className="title">
        <h1>ORGANIC BLOBS</h1>
        <img src="organicBlob.svg" />
      </div>
      <div className="parameters">
        <div>
          <label>Blob complexity</label>
          <input
            type="range"
            min="3"
            max="6"
            id="points-count"
            value={pointCount}
            onChange={(event) => onChangePointCount(event.target.value)}
          ></input>
        </div>

        <div>
          <label>
            Color
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
      </div>
      <style jsx>{`
        .parameters {
          display: flex;
          flex-direction: column;
          max-width: fit-content;
          padding: 1rem;
        }
        .points-count {
          width: 100%;
        }
        .background-color {
          width: 50px;
        }
        div {
          margin: 1rem;
          display: flex;
          flex-direction: column;
        }
        .title {
          flex-direction: row;
        }
        .title svg {
          width: 3rem;
        }
      `}</style>
    </div>
  );
};

export default Parameters;
