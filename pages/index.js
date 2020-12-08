import { useState } from "react";
import Blob from "../components/Blob.js";
import Parameters from "../components/Parameters.js";
import Container from "../components/Container.js";
import Layout from "../components/Layout.js";

const IndexPage = () => {
  const [pointCount, setPointCount] = useState(4);
  const [color, setColor] = useState("#ab21c2");

  return (
    <Layout>
      <Container>
        <Blob pointCount={pointCount} color={color} />
        <Parameters
          pointCount={pointCount}
          onPointCountChange={setPointCount}
          color={color}
          onChangeColor={setColor}
        />
      </Container>
      <style jsx>{`
        .blob {
          display: flex;
        }
        div h1 {
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;
