import { CoffeeListContainer, CoffeeListFilterItem, CoffeeListFilters, CoffeeListHeader, CoffeeListTitle } from "./styles";

import ExpressoImg from '../../../../assets/expresso.png';
import { CoffeeCard } from "../coffee-card";

export function CoffeeList() {
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
        <CoffeeCard
          imgUrl={ExpressoImg}
          title="expresso tradicional"
          tags={["tradicional"]}
          description="O tradicional café feito com água quente e grãos moídos"
          price="9,99"
        />
      </div>

    </CoffeeListContainer>
  )
}