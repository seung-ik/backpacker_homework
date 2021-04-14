import React from "react";
import CardHeader from "components/CardHeader";
import Picture3 from "components/Picture3";

const Case3 = () => {
  return (
    <div>
      <CardHeader />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Picture3 />
        <Picture3 />
        <Picture3 />
        <Picture3 />
        <Picture3 />
      </div>
    </div>
  );
};

export default Case3;
