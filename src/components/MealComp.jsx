import React, { useState } from "react";
import { menu } from "../data";
import Btns from "./Btns";
import { filterBtn } from "./Btns";

function MealComp() {
  const [filteredMenu, setFilteredMenu] = useState(menu);

  const btnHandler = (e) => {
    if (e.currentTarget.textContent === filterBtn[0]) {
      setFilteredMenu(menu);
      console.log("I am all");
    } else {
      const newMenu = menu.filter((each) => {
        return each.category === e.currentTarget.textContent;
      });
      setFilteredMenu(newMenu);
    }
  };

  return (
    <>
      <main>
        <h1>Our Menu</h1>
        <div className="filter-btn-con">
          <Btns filterClick={btnHandler} />
        </div>
        {/* Meals Section */}
        <section className="meal-section">
          {filteredMenu.map((each) => {
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
