import React, { useState, useEffect } from "react";
import Blob from "../components/Blob.js";
import Parameters from "../components/Parameters.js";
import Container from "../components/Container.js";
import Layout from "../components/Layout.js";

const round = (value) => Math.round(value * 10000000) / 10000000;
const sin = Math.sin;
const cos = Math.cos;

const IndexPage = () => {
  const [points, setPoints] = useState([]);
  const [pointCount, setPointCount] = useState(4);
  const [color, setColor] = useState("#ab21c2");
  const [background, setBackground] = useState("#ab21c2");

  //Generate blob animation
  const [animateBlob, setAnimateBlob] = useState(false);
  const [blobAnimation, setBlobAnimation] = useState(null);

  const radius = 1;
  const angle = Math.PI / pointCount;
  const control =
    (4 / 3) * Math.tan(Math.PI / (2 * (1 / (angle / (Math.PI * 2))))) * radius;

  //Génére la forme du blob
  const generateBlobShape = () => {
    let points = [];
    let startOffset = 1;

    for (let i = 0; i < pointCount * 2; i++) {
      const startAngle = angle * i;
      const endAngle = startAngle + angle;
      const minOffset = 0.6;
      const endOffset =
        i % 2 === 0 ? Math.random() * (1 - minOffset) + minOffset : 1;

      points.push({
        startControl: {
          x: round(
            -control * sin(startAngle) + radius * cos(startAngle) * startOffset
          ),
          y: round(
            control * cos(startAngle) + radius * sin(startAngle) * startOffset
          ),
        },
        endControl: {
          x: round(
            control * sin(endAngle) + radius * cos(endAngle) * endOffset
          ),
          y: round(
            -control * cos(endAngle) + radius * sin(endAngle) * endOffset
          ),
        },
        startPoint: {
          x: round(Math.cos(startAngle) * startOffset),
          y: round(Math.sin(startAngle) * startOffset),
        },
        endPoint: {
          x: round(Math.cos(endAngle) * endOffset),
          y: round(Math.sin(endAngle) * endOffset),
        },
      });
      startOffset = endOffset;
    }
    return points;
  };

  useEffect(() => {
    setPoints(generateBlobShape());

    if (animateBlob) {
      setBlobAnimation([
        generateBlobShape(),
        generateBlobShape(),
        generateBlobShape(),
      ]);
    } else {
      setBlobAnimation(null);
    }
  }, [pointCount]);

  useEffect(() => {
    if (animateBlob) {
      setBlobAnimation([
        generateBlobShape(),
        generateBlobShape(),
        generateBlobShape(),
      ]);
    } else {
      setBlobAnimation(null);
    }
  }, [animateBlob]);

  const regeneratePoints = () => {
    setPoints(generateBlobShape());

    if (animateBlob) {
      setBlobAnimation([
        generateBlobShape(),
        generateBlobShape(),
        generateBlobShape(),
      ]);
    } else {
      setBlobAnimation(null);
    }
  };
  return (
    <Layout>
      <div className="title">
        <img src="/svg/logo.svg" />

        <span>Organic blob</span>
      </div>
      <Container>
        <div className="blob">
          <Blob animation={blobAnimation} points={points} color={color} />
        </div>
        <Parameters
          class="parameters"
          regeneratePoints={regeneratePoints}
          pointCount={pointCount}
          onChangePointCount={setPointCount}
          color={color}
          onChangeColor={setColor}
          background={background}
          onChangeBackground={setBackground}
          animateBlob={animateBlob}
          setAnimateBlob={setAnimateBlob}
          points={points}
        />
      </Container>
      <style jsx>{`
        .title {
          display: flex;
          align-items: center;
          padding: 1.5rem 3rem;
          gap: 1rem;
        }
        .title img {
          width: 100%;
          max-width: 3.5rem;
        }
        .title span {
          display: flex;
          align-items: center;
          font-size: 2rem;
        }

        @media (max-width: 680px) {
          .title {
            justify-self: center;
          }
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;
