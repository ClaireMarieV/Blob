import React, { useState, useEffect } from "react";

const pointsToPath = (points) =>
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

const Blob = ({ points, color, animation }) => {
  const path = pointsToPath(points);
  const animateValues = animation
    ? animation
        .concat([animation[0]])
        .map((points) => pointsToPath(points))
        .join(";")
    : null;

  return (
    <svg viewBox="-1 -1 2 2">
      <path fill={color} d={path}>
        {animation && (
          <animate
            repeatCount="indefinite"
            attributeName="d"
            dur="5s"
            values={animateValues}
          />
        )}
      </path>

      <style jsx>{`
        svg {
          height: 75vh;
        }
      `}</style>
    </svg>
  );
};
export default Blob;
