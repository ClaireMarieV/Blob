import { useState } from "react";
import ColorPicker from "../components/ColorPicker";
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
    <div className="parameters">
      <section>
        <div id="buttons">
          <button onClick={(event) => regeneratePoints()}>
            <div className="blob">
              <span>Generate</span>
            </div>
          </button>
          <DownloadBlob points={points} color={color} />
        </div>
        <div className="complexity">
          <div className="start"></div>
          <input
            type="range"
            min="3"
            max="7"
            id="points-count"
            value={pointCount}
            onChange={(event) => onChangePointCount(event.target.value)}
          ></input>
          <div className="end"></div>

          <div>
            <label>
              Animate
              <input
                type="checkbox"
                onClick={(event) => setAnimateBlob(!animateBlob)}
                checked={animateBlob}
              />
            </label>
          </div>
        </div>
      </section>
      <section className="hex-colors">
        <div className="color">
          <input
            style={{
              letterSpacing: " 0.045rem",
              fontFamily: "arboria, sans-serif",
              fontWeight: " 200",
              color: "#fcf7f5",
              padding: "0.5rem 1rem ",
              fontSize: "1.2rem",
            }}
            type="text"
            min="3"
            max=""
            id="colors"
            value={color}
            onChange={(event) => onChangeColor(event.target.value)}
          />
        </div>
        <div className="buttons">
          <button
            className="button-0"
            value="#5f6cff"
            onClick={(color) => onChangeColor(event.target.value)}
          />

          <button
            className="button-2"
            value="#e82d70"
            onClick={(color) => onChangeColor(event.target.value)}
          />

          <button
            className="button-1"
            value="#00d4a6"
            onClick={(color) => onChangeColor(event.target.value)}
          />
          <button
            className="button-4"
            onClick={() => setDisplayColorPicker(!displayColorPicker)}
          >
            +
          </button>
        </div>
      </section>

      {displayColorPicker && (
        <ColorPicker value={color} onChange={(color) => onChangeColor(color)} />
      )}
      <style jsx>{`
        .parameters {
          display: grid;
          align-items: center;
          box-shadow: 10px 16px 10px rgb(0 0 0 / 3%);
          gap: 2rem;
        }

        .parameters > section {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .parameters section > label {
          align-self: center;
        }

        .color {
          display: flex;
          border: 1px solid #fcf7f5;
          height: fit-content;
          border-radius: 20px;
        }

        .color > input {
          padding: 0.5rem;
        }

        .blob {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          gap: 3rem;
        }

        .blob > section {
          display: flex;
          gap: 3rem;
          align-items: center;
        }
        #buttons {
          display: flex;
          align-self: center;
          gap: 3rem;
        }

        #buttons button {
          background: transparent;
          color: #5f6cff;
          width: 9rem;
          height: 9rem;
          border: 2px solid #5f6cff;
          border-radius: 52% 79% 53% / 58% 69% 55%;
        }

        .blob {
          animation: moveR 8s linear infinite;
          border-radius: 50%;
          mix-blend-mode: screen;
          font-size: 1.3rem;
          background: transparent;
        }

        .complexity {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
        }

        .hex-colors {
          display: flex;
        }
        .buttons {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .blob {
          animation: moveR 8s linear infinite;
          border-radius: 50%;
          mix-blend-mode: screen;
          font-size: 1.3rem;
          background: transparent;
        }

        .buttons {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: row;
        }

        .buttons .button-0,
        .buttons .button-1,
        .buttons .button-2,
        .buttons .button-3 {
          width: 2rem;
          height: 2rem;
          border-radius: 100px;
          border: none;
        }

        .button-0 {
          background-color: #5f6cff;
        }

        .button-1 {
          background-color: #00d4a6;
        }

        .button-2 {
          background-color: #e82d70;
        }

        .button-4 {
          background: transparent;
          width: 3rem;
          height: 3rem;
          border: 2px solid #f9b51a;
          border-radius: 52% 79% 53% / 58% 69% 55%;
          display: flex;
          align-items: end;
          justify-content: center;
          font-size: 3rem;
          color: #f9b51a;
          font-weight: 200;
        }

        .points-count {
          width: 100%;
        }

        .background-color {
          width: 50px;
        }

        @media (max-width: 680px) {
          .color {
            flex-direction: column;
          }
          .parameters > section {
            flex-direction: column;
          }

          .hex-colors {
            flex-direction: row;
            padding: 1rem 0.5rem;
          }

          .button-4 {
            display: none;
          }
          .complexity {
            width: 100%;
            justify-content: space-between;
          }
        }
        @media (max-width: 450px) {
          #buttons button {
            width: 8em;
            height: 8em;
          }
        }
      `}</style>
    </div>
  );
};

export default Parameters;
