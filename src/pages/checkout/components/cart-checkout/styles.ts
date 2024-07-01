import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 28rem;

  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${({ theme }) => theme.colors['gray-200']};
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors['gray-400']};
`

export const CheckoutPrice = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors['gray-700']};
    font-family: ${({ theme }) => theme.text.roboto['font-family']};
    line-height: 130%;

    .description {
      font-size: ${({theme}) => theme.text.roboto["text-s"]["font-size"]};
    }

    .price {
      font-size: ${({theme}) => theme.text.roboto["text-m"]};
    }

    .total {
      color: ${({ theme }) => theme.colors['gray-800']};
      font-size: ${({theme}) => theme.text.roboto["text-l"]};
      font-weight: 700;
    }
  }
`

export const ConfirmPurchaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  padding: 0.75rem .5rem;

  border-radius: 6px;
  border: none;

  background-color: ${({ theme }) => theme.colors.yellow};

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.text.roboto['font-family']};
  font-size: ${({ theme }) => theme.text.roboto["button-g"]["font-size"]};
  font-weight: ${({ theme }) => theme.text.roboto["button-g"]["font-weight"]};
  line-height: 130%;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &:active {
    filter: brightness(1.2);
  }
`