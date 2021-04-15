import React from "react";
import Picture4 from "components/Picture4";
import { sample } from "sampleDatas/data/sampledata.js";

const Case4 = () => {
  const datas = sample.cardData;
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {datas.map((data) => {
          return <Picture4 data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Case4;
