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
        <img src="Download1.svg" />
      </button>
      <style jsx>{`
        button {
          background: transparent;
          border: 3px solid #fda47b;
        }
      `}</style>
    </a>
  );
};
export default DownloadBlob;
