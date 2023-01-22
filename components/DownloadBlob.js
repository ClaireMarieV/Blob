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
        a button {
          background: transparent;
          position: relative;
          color: #e82d70;
          width: 9rem;
          height: 9rem;
          border: 2px solid #e82d70;
          border-radius: 52% 79% 53% / 58% 69% 55%;
          transition: 0.2s transform ease-in-out;
          will-change: transform;
          z-index: 0;
          overflow: hidden;
          position: relative;
        }

        .blob {
          border-radius: 50%;
          mix-blend-mode: screen;
          font-size: 1.3rem;
          background: transparent;
        }

        button::after {
          background: #e82d70;
          border-radius: 50%;
          bottom: 0;
          content: "";
          height: 0;
          left: 0;
          border-radius: 52% 79% 53% / 58% 69% 55%;
          padding-bottom: 100%;
          position: absolute;
          right: 0;
          transform: translate3d(0, 100%, 0);
          transition: transform 1.55s cubic-bezier(0.19, 1, 0.22, 1);
          width: 100%;
          will-change: transform;
        }

        a button:hover::after {
          transform: translate(0, 0);
        }

        a button:hover {
          border: none;
          will-change: transform;
        }

        a button > .blob {
          display: block;
          position: relative;
          z-index: 1;
          font-weight: 400;
        }

        a button:hover > .blob {
          color: white;
          transition: 0.25s;
        }

        @media (max-width: 450px) {
          a button {
            width: 8em;
            height: 8em;
          }
        }
      `}</style>
    </a>
  );
};
export default DownloadBlob;
