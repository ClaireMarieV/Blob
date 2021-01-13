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
        <img src="blobGrey.svg" />
        <h1>ORGANICS BLOBS</h1>
      </div>
      <div className="parameters">
        <label>Blob complexity</label>

        <div className="complexity">
          <img src="complexityStart.svg" />
          <input
            type="range"
            min="3"
            max="7"
            id="points-count"
            value={pointCount}
            onChange={(event) => onChangePointCount(event.target.value)}
          ></input>
          <img src="endComplexity.svg" />
        </div>

        <div className="color">
          <label>
            Color
            <input
              type="text"
              min="3"
              max=""
              id="colors"
              value={color}
              onChange={(event) => onChangeColor(event.target.value)}
            />
          </label>
          <div className="buttons">
            <button
              className="button-1"
              value="#a1d3b8"
              onClick={(color) => onChangeColor(event.target.value)}
            />
            <button
              className="button-2"
              value="#b8a1d3"
              onClick={(color) => onChangeColor(event.target.value)}
            />
            <button
              className="button-3"
              value="#D3A1BC"
              onClick={(event) => onChangeColor(event.target.value)}
            />
            <button
              className="button-4"
              value="#FDA47B"
              onClick={(color) => onChangeColor(event.target.value)}
            />
          </div>
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
        .title img {
          width: 100%;
          max-width: 7rem;
        }

        .complexity {
          display: flex;
          flex-direction: row;
        }
        .complexity img {
          width: 100%;
          max-width: 5rem;
        }
        .color input {
          padding: 0.5rem;
        }
        .buttons {
          display: flex;
          flex-direction: row;
          margin: 0;
          width: 0;
        }
        .button-1 {
          background-color: #a1d3b8;
        }
        .button-2 {
          background-color: #b8a1d3;
        }
        .button-3 {
          background-color: #d3a1bc;
        }
        .button-4 {
          background-color: #fda47b;
        }
        .button-1:hover,
        .button-2:hover,
        .button-3:hover,
        .button-4:hover {
          opacity: 0.8;
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
