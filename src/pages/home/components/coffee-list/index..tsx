import { CoffeeListContainer, CoffeeListFilterItem, CoffeeListFilters, CoffeeListHeader, CoffeeListTitle } from "./styles";

import { getCoffeeList } from "../../../../mock/coffee-list";
import { CoffeeCard } from "../coffee-card";

export function CoffeeList() {
  const coffeeList = getCoffeeList();

  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

        <CoffeeListFilters>
          <CoffeeListFilterItem>Tradicional</CoffeeListFilterItem>
          <CoffeeListFilterItem>Especial</CoffeeListFilterItem>
          <CoffeeListFilterItem>Com leite</CoffeeListFilterItem>
          <CoffeeListFilterItem>Alcoólico</CoffeeListFilterItem>
          <CoffeeListFilterItem>Gelado</CoffeeListFilterItem>
        </CoffeeListFilters>
      </CoffeeListHeader>

      <div className="card-grid">
        {coffeeList.map(coffeeItem => (
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