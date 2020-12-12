import React from "react";

const toHexa = (number) => Math.round(number).toString(16).padStart(2, "0");

const DivColors = ({ onChange, value }) => (
  <div
    className="background"
    onClick={(event) => {
      const percent =
        (event.clientX - event.target.offsetLeft) / event.target.clientWidth;
      const portion = 1 / 6;
      let red = 0;
      let green = 0;
      let blue = 0;

      if (percent <= portion) {
        red = 1;
      }
      if (percent > portion && percent < 2 * portion) {
        red = 1 - (percent - portion) / portion;
      }
      if (percent > 4 * portion && percent < 5 * portion) {
        red = (percent - 4 * portion) / portion;
      }
      if (percent >= 5 * portion) {
        red = 1;
      }

      //GREEN
      if (percent > 2 * portion && percent < 3 * portion) {
        green = (percent - 2 * portion) / portion;
      }
      if (percent >= 3 * portion && percent <= 5 * portion) {
        green = 1;
      }
      if (percent > 5 * portion) {
        green = 1 - (percent - 5 * portion) / portion;
      }

      //BLUE
      if (percent < portion) {
        blue = percent / portion;
      }
      if (percent >= portion && percent <= 3 * portion) {
        blue = 1;
      }
      if (percent > 3 * portion && percent < 4 * portion) {
        blue = 1 - (percent - 3 * portion) / portion;
      }
      console.log(red * 255);
      console.log(Math.round(red * 255).toString(16));

      onChange(
        "#" + toHexa(red * 255) + toHexa(green * 255) + toHexa(blue * 255)
      );
    }}
  >
    <style jsx>{`
      .background {
        height: 5vh;
        width: 30vw;
        background: linear-gradient(
          to left,
          #ff0000,
          #ffff00,
          #00ff00,
          #00ffff,
          #0000ff,
          #ff00ff,
          #ff0000
        );
        border-radius: 0.25rem;
      }
    `}</style>
  </div>
);
export default DivColors;
