import { useState } from "react";

const toHexa = (number) => Math.round(number).toString(16).padStart(2, "0");

const ColorPicker = ({ onChange, value }) => {
  const [rawColor, setRawColor] = useState({ red: 0, green: 0, blue: 0 });

  const onContrastColorSelection = (event) => {
    const white =
      1 -
      (event.clientX - event.target.parentElement.offsetLeft) /
        event.target.parentElement.clientWidth;
    const black =
      (event.clientY - event.target.getBoundingClientRect().top) /
      event.target.parentElement.clientHeight;

    let red = rawColor.red;
    let green = rawColor.green;
    let blue = rawColor.blue;

    // lighten
    red = red + (1 - red) * white;
    green = green + (1 - green) * white;
    blue = blue + (1 - blue) * white;

    // darken
    red = red * (1 - black);
    green = green * (1 - black);
    blue = blue * (1 - black);

    onChange(
      "#" + toHexa(red * 255) + toHexa(green * 255) + toHexa(blue * 255)
    );
  };

  const onRawColorSelection = (event) => {
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

    setRawColor({ red, green, blue });

    onChange(
      "#" + toHexa(red * 255) + toHexa(green * 255) + toHexa(blue * 255)
    );
  };

  return (
    <div className="raw-contrast">
      <div className="raw-color" onClick={onRawColorSelection}></div>
      <div
        className="contrast-color"
        style={{
          backgroundColor:
            "#" +
            toHexa(rawColor.red * 255) +
            toHexa(rawColor.green * 255) +
            toHexa(rawColor.blue * 255),
        }}
        onClick={onContrastColorSelection}
      >
        <div className="light"></div>
        <div className="dark"></div>
      </div>
      <style jsx>{`
        .raw-contrast {
          width: 100%;
          padding: 1rem;
        }
        .raw-color {
          height: 8vh;
          max-width: 100%;
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
          margin-bottom: 3rem;
        }
        .cursor {
          position: absolute;
          width: 2rem;
          border: 2px solid;
          border-radius: 50%;
        }

        .contrast-color {
          width: 100%;
          height: 15rem;
          max-height: 100%;
          max-width: 100%;
          border: none;
          border-radius: 0.25rem;
        }
        .light {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
          );
          height: 15rem;
          position: absolute;
          width: 15rem;
        }
        .dark {
          background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          );
          height: 15rem;
          position: absolute;
          width: 15rem;
        }
      `}</style>
    </div>
  );
};
export default ColorPicker;
