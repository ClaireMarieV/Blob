import { useState } from "react";
import ColorPicker from "../components/ColorPicker";
import AnimateBlob from "../components/AnimateBlob";
import DownloadBlob from "../components/DownloadBlob";

const Parameters = ({
  pointCount,
  onChangePointCount,
  color,
  onChangeColor,
  regeneratePoints,
  points,
  animateBlob,
  setAnimateBlob,
}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <div className="shadow">
      <div className="parameters">
        <section>
          <div className="color">
            <input
              type="text"
              min="3"
              max=""
              id="colors"
              value={color}
              onChange={(event) => onChangeColor(event.target.value)}
            />
            <div className="buttons">
              <button
                className="button-1"
                value="#A1D3B8"
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
                onClick={() => setDisplayColorPicker(!displayColorPicker)}
              >
                <span>+</span>
              </button>
            </div>
          </div>
        </section>

        {displayColorPicker && (
          <ColorPicker
            value={color}
            onChange={(color) => onChangeColor(color)}
          />
        )}
        <section>
          <div id="buttons">
            <button onClick={(event) => regeneratePoints()}>
              <img src="randomShape.svg" />
            </button>
            <DownloadBlob points={points} color={color} />
          </div>
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
          <label>
            Animate
            <input
              type="checkbox"
              onClick={(event) => setAnimateBlob(!animateBlob)}
              checked={animateBlob}
            />
          </label>
        </section>
      </div>

      <style jsx>{`
        .parameters {
          display: grid;
          align-items: center;
          max-width: fit-content;
          padding: 1rem;
          margin: auto;
          box-shadow: 10px 16px 10px rgb(0 0 0 / 3%);
        }
        .parameters > section {
          display: flex;
          gap: 3rem;
        }
        .parameters section > label {
          align-self: center;
        }
        #buttons button {
          transition: all 0.5s;
        }
        #buttons:nth-child(1):hover button {
          transform: rotate(45deg);
          transition: all 0.5s;
        }
        #buttons button a {
          transition: all 0.5s;
        }
        #buttons:nth-child(1):hover a button > img {
          transform: scale(1.2);
          transition: all 0.5s;
        }
        .complexity {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .complexity img {
          width: 100%;
          max-width: 4rem;
        }
        .color {
          display: flex;
        }
        .color input {
          padding: 0.5rem;
        }
        .color:nth-child(1):hover input {
          background: #ededed;
        }
        .buttons {
          display: flex;
          align-items: center;
          flex-direction: row;
          margin: 0;
          width: 0;
        }
        .buttons button {
          width: 2rem;
          height: 2rem;
          margin: 1rem;
        }
        .button-1 {
          background-color: #a1d3b8;
        }
        .button-2 {
          background-color: #b69fd2;
        }
        .button-3 {
          background-color: #c98cae;
        }

        .button-4 {
          background: transparent;
          border: 3px solid #fda47b;
          width: 3rem !important;
          height: 3rem !important;
          display: flex;
          align-items: center;
          font-size: 2rem;
          justify-content: center;
          color: #fda47b;
          transition: 0.5s;
        }

        .button-1:hover,
        .button-2:hover,
        .button-3:hover {
          opacity: 0.8;
        }
        .button-4:hover {
          transform: scale(1.1);
          transition: 0.5s;
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
