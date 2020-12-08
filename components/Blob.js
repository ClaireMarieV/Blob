import React from "react";

const round = (value) => Math.round(value * 10000000) / 10000000;
const sin = Math.sin;
const cos = Math.cos;

const Blob = ({ pointCount, color }) => {
  const radius = 1;
  const angle = (2 * Math.PI) / pointCount;
  let index = 0;
  let path = "M1 0";
  const points = [];
  const control =
    (4 / 3) * Math.tan(Math.PI / (2 * (1 / (angle / (Math.PI * 2))))) * radius;

  for (let i = 0; i < pointCount; i++) {
    const startAngle = angle * i;
    const endAngle = startAngle + angle;

    path += " C";
    path += round(-control * sin(startAngle) + radius * cos(startAngle));
    path += " ";
    path += round(control * cos(startAngle) + radius * sin(startAngle));
    path += ", ";
    path += round(control * sin(endAngle) + radius * cos(endAngle));
    path += " ";
    path += round(-control * cos(endAngle) + radius * sin(endAngle));
    path += ", ";
    path += round(Math.cos(endAngle));
    path += " ";
    path += round(Math.sin(endAngle));

    points.push({ x: Math.cos(startAngle), y: Math.sin(startAngle) });
  }
  path += "z";
  return (
    <div>
      <svg viewBox="-2 -2 4 4">
        {points.map((point) => (
          <circle cx={point.x} cy={point.y} r="0.01"></circle>
        ))}
        <path fill={color} d={path}></path>
      </svg>
      <style jsx>{`
        svg {
          height: 100vh;
        }
      `}</style>
    </div>
  );
};
export default Blob;
