import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { InputNumber } from "../../../../components/input-number";
import { CardActionsButtons, CoffeeListCard } from "./styles";

interface CoffeeCardProps {
  title: string;
  description: string;
  price: string;
  tags: string[];
  imgUrl: string;
}

export function CoffeeCard({ imgUrl, description, price, tags, title }: CoffeeCardProps) {
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
    <CoffeeListCard>
      <img src={imgUrl} alt={`Xícara de ${title} vista por cima`} />

      <div className="card-tags">
        {tags.map(tag => (
          <div className="tag-item" key={tag}>{tag}</div>
        ))}
      </div>

      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>

      <div className="card-purchase">
        <p>R$ <span className="price">{price}</span></p>

        <CardActionsButtons>
          <InputNumber orderQtd={orderQtd} handleChangeQtd={handleQtyChange} />

          <button className="cart-button">
            <ShoppingCart weight="fill" size={20} />
          </button>
        </CardActionsButtons>
      </div>
    </CoffeeListCard>
  )
}