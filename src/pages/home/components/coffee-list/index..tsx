import { CoffeeListContainer, CoffeeListFilterItem, CoffeeListFilters, CoffeeListHeader, CoffeeListTitle } from "./styles";

import { useState } from "react";
import { getCoffeeList } from "../../../../mock/coffee-list";
import { CoffeeCard } from "../coffee-card";

export function CoffeeList() {
  const coffeeList = getCoffeeList();
  const coffeeTags = ["tradicional", "especial", "com leite", "alcoólico", "gelado"];
  const [selectedTag, setSelectedTag] = useState("");

  const filteredCoffeeList = coffeeList.filter(coffeeItem => {
    if (selectedTag === "") return true;
    return coffeeItem.tags.includes(selectedTag);
  })

  function handleSelectedTag(tag: string) {
    if (selectedTag === tag) return setSelectedTag("");
    setSelectedTag(tag);
  }

  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

        <CoffeeListFilters>
          {coffeeTags.map(tag => (
            <CoffeeListFilterItem 
              key={tag}
              onClick={() => handleSelectedTag(tag)}
              data-selected={selectedTag === tag}
            >
              {tag}
            </CoffeeListFilterItem>
          ))}
        </CoffeeListFilters>
      </CoffeeListHeader>

      <div className="card-grid">
        {filteredCoffeeList.map(coffeeItem => (
          <CoffeeCard
            key={coffeeItem.title}
            imgUrl={coffeeItem.imgUrl}
            title={coffeeItem.title}
            tags={coffeeItem.tags}
            description={coffeeItem.description}
            price={coffeeItem.price}
          />
        ))}
      </div>
    </CoffeeListContainer>
  )
}