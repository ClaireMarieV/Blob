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
    <svg viewBox="-1 -1 2 2">
      <path fill={color} d={path}></path>

      <style jsx>{`
        svg {
          height: 75vh;
        }
      `}</style>
    </svg>
  );
};
export default Blob;
