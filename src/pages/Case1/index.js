import React from "react";
import CardHeader from "components/CardHeader";
import Picture1 from "components/Picture1";

const Case1 = () => {
  return (
    <div>
      <CardHeader />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Picture1 />
        <Picture1 />
        <Picture1 />
        <Picture1 />
        <Picture1 />
      </div>
    </div>
  );
};

export default Case1;
