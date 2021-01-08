import React, { useState, useEffect } from "react";

const Blob = ({ points, color }) => {
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
          <circle //devenir un state (points, setPoint)
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
