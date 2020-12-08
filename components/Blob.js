import React from "react";

const round = (value) => Math.round(value * 10000000) / 10000000;
const sin = Math.sin;
const cos = Math.cos;

const Blob = ({ pointCount, color }) => {
  const radius = 1;
  const angle = Math.PI / pointCount;
  const control =
    (4 / 3) * Math.tan(Math.PI / (2 * (1 / (angle / (Math.PI * 2))))) * radius;

  let points = [];

  for (let i = 0; i < pointCount * 2; i++) {
    const startAngle = angle * i;
    const endAngle = startAngle + angle;
    const minOffset = 0.6;
    const offset =
      i % 2 === 0 ? Math.random() * (1 - minOffset) + minOffset : 1;

    points.push({
      control1: {
        x: round(
          -control * sin(startAngle) + radius * cos(startAngle) * offset
        ),
        y: round(control * cos(startAngle) + radius * sin(startAngle) * offset),
      },
      control2: {
        x: round(control * sin(endAngle) + radius * cos(endAngle) * offset),
        y: round(-control * cos(endAngle) + radius * sin(endAngle) * offset),
      },
      point: {
        x: round(Math.cos(endAngle) * offset),
        y: round(Math.sin(endAngle) * offset),
      },
    });
  }

  const path =
    "M1 0 " +
    points
      .map(
        ({ control1, control2, point }) =>
          "C" +
          control1.x +
          " " +
          control1.y +
          ", " +
          control2.x +
          " " +
          control2.y +
          ", " +
          point.x +
          " " +
          point.y
      )
      .join(" ") +
    "Z";

  return (
    <div>
      <svg viewBox="-2 -2 4 4">
        <path fill={color} d={path}></path>
        {points.map(({ point }) => (
          <circle cx={point.x} cy={point.y} r="0.02"></circle>
        ))}
        {points.map(({ control1 }) => (
          <circle
            cx={control1.x}
            cy={control1.y}
            r="0.02"
            fill="orange"
          ></circle>
        ))}
        {points.map(({ control2 }) => (
          <circle cx={control2.x} cy={control2.y} r="0.02" fill="gold"></circle>
        ))}
      </svg>
      <style jsx>{`
        svg {
          height: 100vh;
          justify-self: center;
        }
      `}</style>
    </div>
  );
};
export default Blob;
