import { CartCheckout } from "./components/cart-checkout";
import { UserInformation } from "./components/user-information";
import { Container } from "./styles";

export function Checkout() {
  return (
    <Container>
      <UserInformation />
      <CartCheckout />
    </Container>
  )
}