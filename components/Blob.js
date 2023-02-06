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
          width: 30vw;
        }

        @media (max-width: 860px) {
          svg {
            width: 50vw;
          }
        }
        @media (max-width: 680px) {
          svg {
            width: 80vw;
          }
        }
        @media (max-width: 630px) {
          svg {
            width: 100%;
          }
        }
      `}</style>
    </svg>
  );
};
export default Blob;
