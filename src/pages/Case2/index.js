import React from "react";
import CardHeader from "components/CardHeader";
import Picture2 from "components/Picture2";

const Case2 = () => {
  return (
    <div>
      <CardHeader />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Picture2 />
        <Picture2 />
        <Picture2 />
        <Picture2 />
        <Picture2 />
      </div>
    </div>
  );
};

export default Case2;
