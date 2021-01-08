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
  }, [pointCount]);

  const regeneratePoints = () => {
    setPoints(generateBlobShape());
  };
  return (
    <Layout>
      <Container>
        <Blob points={points} color={color} />
        <Parameters
          regeneratePoints={regeneratePoints}
          pointCount={pointCount}
          onChangePointCount={setPointCount}
          color={color}
          onChangeColor={setColor}
          background={background}
          onChangeBackground={setBackground}
        />
      </Container>
      <style jsx>{``}</style>
    </Layout>
  );
};

export default IndexPage;
