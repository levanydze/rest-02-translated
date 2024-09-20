import React from "react";
import styles from "./menu.module.css";
import { sectionOrder } from "@/Control/restaurantMenu";
import { fireData } from "@/Control/fetchingData";
export const revalidate = 300; // 5 minutes
import ServerCard from "./card/ServerCard";

export default async function Menu({}) {
  const data = await fireData();
  if (!data) {
    return null;
  }
  const sortedSections = data.sort((a, b) => {
    const indexA = sectionOrder.indexOf(a.menuCategory);
    const indexB = sectionOrder.indexOf(b.menuCategory);
    return indexA - indexB;
  });
  return (
    <div className={styles.cardWrapper}>
      <section className="section ">
        <div className="container ">
          {sortedSections.map((section) => (
            <div key={section.menuCategory} className={styles.menuWrapper}>
              <h3 className="font2 color1 heading3 ">MENU</h3>
              <p className="twoLines"></p>
              <h2 className="heading3 font2">{section.menuCategory}</h2>
              <div className={styles.menuContainer}>
                {section.menuItems
                  .sort((a, b) => a.priority - b.priority) // Sort by ascending priority
                  .map((item) =>
                    !item.disable ? (
                      <ServerCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        disable={item.disable}
                        portions={item.portions}
                        price={item.price}
                        priority={item.priority}
                        season={item.season}
                        special={item.special}
                        spicy={item.spicy}
                        vegan={item.vegan}
                        newItem={item.newItem}
                        ingredients={item.ingredients}
                      />
                    ) : null
                  )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
