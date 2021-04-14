import React from "react";
import CardHeader from "components/CardHeader";
import Picture4 from "components/Picture4";

const Case4 = () => {
  return (
    <div>
      <CardHeader />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Picture4 />
        <Picture4 />
        <Picture4 />
        <Picture4 />
        <Picture4 />
      </div>
    </div>
  );
};

export default Case4;
