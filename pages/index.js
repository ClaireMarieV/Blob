import { useState } from "react";
import Blob from "../components/Blob.js";
import Parameters from "../components/Parameters.js";

const IndexPage = () => {
  const [pointCount, setPointCount] = useState(8);

  return (
    <div>
      <Parameters pointCount={pointCount} onPointCountChange={setPointCount} />
      <Blob pointCount={pointCount} />
    </div>
  );
};

export default IndexPage;
