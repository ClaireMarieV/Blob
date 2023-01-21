import React from "react";

const DownloadBlob = ({ points, color }) => {
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
    <a
      download="blob.svg"
      href={
        typeof btoa !== "undefined" &&
        "data:image/svg+xml;base64," +
          btoa(
            "<?xml version='1.0' standalone='no'?><svg viewBox='-1 -1 2 2' xmlns='http://www.w3.org/2000/svg'><path fill='" +
              color +
              "' d='" +
              path +
              "'></path></svg>"
          )
      }
    >
      <button>
        <div className="blob">
          <span>Download</span>
        </div>
      </button>
      <style jsx>{`
        button {
          background: transparent;
          position: relative;
          color: #e82d70;
          width: 9em;
          height: 9em;
          border: 2px solid #e82d70;
          border-radius: 52% 79% 53% / 58% 69% 55%;
        }
        .blob {
          animation: moveR 8s linear infinite;
          border-radius: 50%;
          mix-blend-mode: screen;
          font-size: 1.3rem;
          background: transparent;
        }
      `}</style>
    </a>
  );
};
export default DownloadBlob;
