import { ShoppingCart } from "phosphor-react";
import { CardActionsButtons, CoffeeListCard } from "./styles";

interface CoffeeCardProps {
  title: string;
  description: string;
  price: string;
  tags: string[];
  imgUrl: string;
}

export function CoffeeCard({ imgUrl, description, price, tags, title }: CoffeeCardProps) {
  return (
    <CoffeeListCard>
      <img src={imgUrl} alt="Xícara de Espresso vista por cima" />

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

          <button className="cart-button">
            <ShoppingCart weight="fill" size={20} />
          </button>
        </CardActionsButtons>
      </div>
    </CoffeeListCard>
  )
}