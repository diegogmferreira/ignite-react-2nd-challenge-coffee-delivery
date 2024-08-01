import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useState } from "react";
import { Controller, useFormContext } from 'react-hook-form';
import { useTheme } from "styled-components";
import { CustomInput } from '../../../../components/custom-input';
import { CheckoutTitles } from "../../styles";
import { Container, PaymentSelectButton, UserInfoForm } from "./styles";


export function UserInformation() {
  const { colors } = useTheme();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const { register, formState: { errors }, setValue, control } = useFormContext()

  function handleSelectedPaymentMethod(method: string) {
    if (selectedPaymentMethod === method) return setSelectedPaymentMethod("");
    setSelectedPaymentMethod(method);
    setValue("paymentMethod", method);
  }

  function formatCep(value: string) {
    return value.replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
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
            <Controller
              control={control}
              name='zipCode'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <CustomInput
                  gridColumn="span 4 / span 4"
                  placeholder="CEP"
                  maxLength={9}
                  onChange={(e) => {
                    const formattedCep = formatCep(e.target.value)

                    onChange(formattedCep)
                    setValue('zipCode', formattedCep)
                  }}
                  value={value}
                  {...error}
                />
              )}
            />

            <CustomInput
              gridColumn="span 12 / span 12"
              placeholder="Rua"
              {...register('streetName')}
              {...errors.streetName}
            />

            <CustomInput
              gridColumn="span 4 / span 4"
              placeholder="Número"
              type="number"
              {...register('number')}
              {...errors.number}
            />
            <CustomInput
              gridColumn="span 8 / span 8"
              placeholder="Complemento"
              isOptional
              {...register('complement')}
              {...errors.complement}
            />

            <CustomInput
              gridColumn="span 4 / span 4"
              placeholder="Bairro"
              {...register('neighborhood')}
              {...errors.neighborhood}
            />
            <CustomInput
              gridColumn="span 6 / span 6"
              placeholder="Cidade"
              {...register('city')}
              {...errors.city}
            />
            <CustomInput
              gridColumn="span 2 / span 2"
              placeholder="UF"
              {...register('state')}
              {...errors.state}
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
              onClick={() => handleSelectedPaymentMethod("CREDIT")}
              data-selected={selectedPaymentMethod === 'CREDIT'}
            >
              <CreditCard size={22} color={colors["purple"]} />
              Cartão de crédito
            </PaymentSelectButton>

            <PaymentSelectButton
              type="button"
              onClick={() => handleSelectedPaymentMethod("DEBIT")}
              data-selected={selectedPaymentMethod === 'DEBIT'}
            >
              <Bank size={22} color={colors["purple"]} />
              Cartão de débito
            </PaymentSelectButton>

            <PaymentSelectButton
              type="button"
              onClick={() => handleSelectedPaymentMethod("CASH")}
              data-selected={selectedPaymentMethod === 'CASH'}
            >
              <Money size={22} color={colors["purple"]} />
              Dinheiro
            </PaymentSelectButton>

            {/* {errors.paymentMethod && <p className="error-message">{errors.paymentMethod.message?.toString()}</p>} */}
          </div>
        </div>
      </UserInfoForm>
    </Container>
  )
}