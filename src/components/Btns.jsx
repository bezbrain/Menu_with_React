import React from "react";
import { menu } from "../data";

export const filterBtn = ["All", "Breakfast", "Lunch", "Shakes", "Dinner"];
function Btns({ filterClick, cat }) {
  return (
    <>
      {filterBtn.map((each, i) => {
        return (
          <button
            className={`btn ${cat === each ? "active" : ""}`}
            key={i}
            onClick={filterClick}
          >
            {each}
          </button>
        );
      })}
    </>
  );
}

export default Btns;
