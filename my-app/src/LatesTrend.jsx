import React from "react";
import LatesTrendItem from "./LatesTrendItem";

const LatesTrend = () => {
  return (
    <section class="latestTrend">
      <h1>Latest Fashion Trends</h1>
      <div class="latestTrend__container">
        <LatesTrendItem />
        <LatesTrendItem />
        <LatesTrendItem />
        <LatesTrendItem />
      </div>
    </section>
  );
};

export default LatesTrend;
