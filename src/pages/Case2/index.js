import React from "react";
import Picture2 from "components/Picture2";
import { sample } from "sampleDatas/data/sampledata.js";

const Case2 = () => {
  const datas = sample.cardData;
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {datas.map((data) => {
          return <Picture2 data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Case2;
