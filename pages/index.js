import { useState } from "react";
import Blob from "../components/Blob.js";
import Parameters from "../components/Parameters.js";

const IndexPage = () => {
  const [pointCount, setPointCount] = useState(8);
  const [color, setColor] = useState("");

  return (
    <div>
      <Parameters
        pointCount={pointCount}
        onPointCountChange={setPointCount}
        color={color}
        onChangeColor={setColor}
      />
      <Blob pointCount={pointCount} color={color} />
    </div>
  );
};

export default IndexPage;
