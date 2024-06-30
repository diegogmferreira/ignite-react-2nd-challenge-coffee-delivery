import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useState } from "react";
import { useTheme } from "styled-components";
import { CustomInput } from '../../../../components/custom-input';
import { CheckoutTitles } from "../../styles";
import { Container, PaymentSelectButton, UserInfoForm } from "./styles";

export function UserInformation() {
  const { colors } = useTheme();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  function handleSelectedPaymentMethod(method: string) {
    if (selectedPaymentMethod === method) return setSelectedPaymentMethod("");
    setSelectedPaymentMethod(method);
  }

  return (
    <Container>
      <CheckoutTitles>Complete seu pedido</CheckoutTitles>

      <UserInfoForm>
        <div className="address-form">
          <div className="address-info">
            <MapPin size={22} color={colors["yellow-dark"]} />
            <div>
              <p className="title">Endereço de entrega</p>
              <p className="description">Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="address-inputs">
            <CustomInput
              gridColumn="span 4 / span 4"
              placeholder="CEP"
            />

            <CustomInput
              gridColumn="span 12 / span 12"
              placeholder="Rua"
            />

            <CustomInput
              gridColumn="span 4 / span 4"
              placeholder="Número"
              type="number"
            />
            <CustomInput
              gridColumn="span 8 / span 8"
              placeholder="Complemento"
              isOptional
            />

            <CustomInput
              gridColumn="span 4 / span 4"
              placeholder="Bairro"
            />
            <CustomInput
              gridColumn="span 6 / span 6"
              placeholder="Cidade"
            />
            <CustomInput
              gridColumn="span 2 / span 2"
              placeholder="UF"
            />

          </div>
        </div>
      </UserInfoForm>

      <UserInfoForm>
        <div className="address-form">
          <div className="address-info">
            <CurrencyDollar size={22} color={colors["purple"]} />
            <div>
              <p className="title">Pagamento</p>
              <p className="description">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div className="payment-method-container">
            <PaymentSelectButton
              type="button"
              onClick={() => handleSelectedPaymentMethod("credit-card")}
              data-selected={selectedPaymentMethod === 'credit-card'}
            >
              <CreditCard size={22} color={colors["purple"]} />
              Cartão de crédito
            </PaymentSelectButton>

            <PaymentSelectButton
              type="button"
              onClick={() => handleSelectedPaymentMethod("debit-card")}
              data-selected={selectedPaymentMethod === 'debit-card'}
            >
              <Bank size={22} color={colors["purple"]} />
              Cartão de débito
            </PaymentSelectButton>

            <PaymentSelectButton
              type="button"
              onClick={() => handleSelectedPaymentMethod("money")}
              data-selected={selectedPaymentMethod === 'money'}
            >
              <Money size={22} color={colors["purple"]} />
              Dinheiro
            </PaymentSelectButton>

          </div>
        </div>
      </UserInfoForm>
    </Container>
  )
}