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
      startControl: {
        x: round(
          -control * sin(startAngle) + radius * cos(startAngle) * offset
        ),
        y: round(control * cos(startAngle) + radius * sin(startAngle) * offset),
      },
      endControl: {
        x: round(control * sin(endAngle) + radius * cos(endAngle) * offset),
        y: round(-control * cos(endAngle) + radius * sin(endAngle) * offset),
      },
      startPoint: {
        x: round(Math.cos(startAngle) * offset),
        y: round(Math.sin(startAngle) * offset),
      },
      endPoint: {
        x: round(Math.cos(endAngle) * offset),
        y: round(Math.sin(endAngle) * offset),
      },
    });
  }

  const path =
    "M1 0 " +
    points
      .map(
        ({ startControl, endControl, endPoint }) =>
          "C" +
          startControl.x +
          " " +
          startControl.y +
          ", " +
          endControl.x +
          " " +
          endControl.y +
          ", " +
          endPoint.x +
          " " +
          endPoint.y
      )
      .join(" ") +
    "Z";

  return (
    <div>
      <svg viewBox="-2 -2 4 4">
        <path fill={color} d={path}></path>
        {points.map(({ endPoint }) => (
          <circle cx={endPoint.x} cy={endPoint.y} r="0.02"></circle>
        ))}
        {points.map(({ startPoint, startControl }) => (
          <line
            x1={startPoint.x}
            y1={startPoint.y}
            x2={startControl.x}
            y2={startControl.y}
            stroke="black"
            stroke-width="0.01"
          ></line>
        ))}
        {points.map(({ startControl }) => (
          <circle
            cx={startControl.x}
            cy={startControl.y}
            r="0.02"
            fill="orange"
          ></circle>
        ))}
        {points.map(({ endPoint, endControl }) => (
          <line
            x1={endPoint.x}
            y1={endPoint.y}
            x2={endControl.x}
            y2={endControl.y}
            stroke="black"
            strokeWidth="0.01"
          ></line>
        ))}
        {points.map(({ endControl }) => (
          <circle
            cx={endControl.x}
            cy={endControl.y}
            r="0.02"
            fill="gold"
          ></circle>
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
