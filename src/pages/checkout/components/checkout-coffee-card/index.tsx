import { Trash } from "phosphor-react";
import { useState } from "react";
import { useTheme } from "styled-components";
import { InputNumber } from "../../../../components/input-number";
import { getCoffeeList } from "../../../../mock/coffee-list";
import { Container } from "./styles";


export function CheckoutCoffeeCard() {
  const coffee = getCoffeeList();
  const { colors } = useTheme();

  const [orderQtd, setOrderQtd] = useState(1);

  function handleQtyChange(action: "INCREMENT" | "DECREMENT") {
    switch (action) {
      case 'INCREMENT':
        setOrderQtd(prevState => prevState + 1);
        break;
      case 'DECREMENT':
        if (orderQtd === 1) return;
        setOrderQtd(prevState => prevState - 1);
    }
  }

  return (
    <Container>
      <div className="coffee-card-info">
        <img src={coffee[0].imgUrl} alt="coffee" />

        <div className="details">
          <p className="title">{coffee[0].title}</p>

          <div className="actions">
            <InputNumber orderQtd={orderQtd} handleChangeQtd={handleQtyChange} />
            <button className="remove-btn">
              <Trash size={16} color={colors.purple} />
              remover
            </button>
          </div>
        </div>
      </div>
      
      <div className="coffee-price">
        R$ {coffee[0].price}
      </div>
    </Container>
  )
}