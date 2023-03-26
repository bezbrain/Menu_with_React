import React, { useState } from "react";
import { menu } from "../data";
import FilterComp from "./FilterComp";

function MealComp() {
  const [show, setShow] = useState(false);

  const All = () => {
    console.log("This is All");
  };
  const Breakfast = () => {
    console.log("This is Breakfast");
    return <FilterComp filterOut={menu} />;
  };
  const Lunch = () => {
    console.log("This is Lunch");
  };
  const Shakes = () => {
    console.log("This is shakes");
  };
  const Dinner = () => {
    console.log("This is Dinner");
  };

  return (
    <>
      <main>
        <h1>Our Menu</h1>
        <div className="filter-btn-con">
          <button className="btn" onClick={All}>
            All
          </button>
          <button className="btn" onClick={Breakfast}>
            Breakfast
          </button>
          <button className="btn" onClick={Lunch}>
            Lunch
          </button>
          <button className="btn" onClick={Shakes}>
            Shakes
          </button>
          <button className="btn" onClick={Dinner}>
            Dinner
          </button>
        </div>
        {/* Meals Section */}
        <section className="meal-section">
          {menu.map((each) => {
            const { id, title, category, price, img, desc } = each;
            return (
              <div className="map-con" key={id}>
                <img src={img} alt="" />
                <article className="meal-article">
                  <div className="article-heading-con">
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                  </div>
                  <p>{desc}</p>
                </article>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default MealComp;
