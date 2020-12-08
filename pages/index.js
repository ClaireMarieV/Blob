import React from "react";
import Blob from "../components/Blob.js";
import Parameters from "../components/Parameters.js";

const IndexPage = () => (
  <div>
    <Parameters />
    <Blob pointCount="8" />
  </div>
);
export default IndexPage;
