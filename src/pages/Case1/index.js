import React from "react";
import Picture1 from "components/Picture1";
import { sample } from "sampleDatas/data/sampledata.js";

const Case1 = () => {
  const datas = sample.cardData;

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {datas.map((data) => {
          return <Picture1 data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Case1;
