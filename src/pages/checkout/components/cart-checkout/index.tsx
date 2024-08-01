import { CheckoutTitles } from "../../styles";
import { CheckoutCoffeeCard } from "../checkout-coffee-card";
import { CartCheckoutContainer, CheckoutPrice, ConfirmPurchaseButton, Container, Divider } from "./styles";

export function CartCheckout() {

  return (
    <Container>
      <CheckoutTitles>Cafés selecionados</CheckoutTitles>

      <CartCheckoutContainer>
        <CheckoutCoffeeCard />
        <Divider />
        <CheckoutCoffeeCard />
        <Divider />

        <CheckoutPrice>
          <div>
            <div className="description">Total de itens</div>
            <div className="price">R$ 29,70</div>
          </div>

          <div>
            <div className="description">Entrega</div>
            <div className="price">R$ 3,70</div>
          </div>

          <div>
            <div className="total">Total</div>
            <div className="total">R$ 33,40</div>
          </div>
        </CheckoutPrice>

        <ConfirmPurchaseButton type="submit">
          Confirmar pedido
        </ConfirmPurchaseButton>
      </CartCheckoutContainer>
    </Container>
  )
}