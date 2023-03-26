import React from "react";

function FilterComp({ filterOut, meal }) {
  return (
    <>
      {filterOut.filter((each) => {
        return each.category === meal;
      })}
    </>
  );
}

export default FilterComp;
