import React from "react";
import Picture3 from "components/Picture3";
import { sample } from "sampleDatas/data/sampledata.js";

const Case3 = () => {
  const datas = sample.cardData;
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {datas.map((data) => {
          return <Picture3 data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Case3;
