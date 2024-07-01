import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 40rem;

  .address-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors['gray-200']};
  }

  .address-info {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    line-height: 130%;



    p.title {
      font-family: ${({theme}) => theme.text.roboto['font-family']};
      font-size: ${({theme}) => theme.text.roboto["text-m"]};
      color: ${({theme}) => theme.colors['gray-800']};
    }

    p.description {
      font-family: ${({theme}) => theme.text.roboto['font-family']};
      font-size: ${({theme}) => theme.text.roboto["text-s"]["font-size"]};
      color: ${({theme}) => theme.colors['gray-700']};
    }
  }

  .address-inputs {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    /* width: 40rem; */
    width: 100%;
    gap: 1rem;
  }

  .payment-method-container {
    display: flex;
    width: 100%;
    gap: 0.75rem;
  }
`

export const PaymentSelectButton = styled.button`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;

  height: 3.25rem;
  width: 100%;
  
  background-color: ${({theme}) => theme.colors['gray-400']};
  border-radius: 6px;
  border: 1px solid transparent;

  color: ${({theme}) => theme.colors['gray-700']};
  font-family: ${({theme}) => theme.text.roboto["font-family"]};
  font-size: ${({theme}) => theme.text.roboto["button-m"]["font-size"]};
  font-weight: ${({theme}) => theme.text.roboto["button-m"]["font-weight"]};
  line-height: 180%;
  text-transform: uppercase;

  &:hover {
    background-color: ${({theme}) => theme.colors['gray-500']};
    color: ${({theme}) => theme.colors['gray-800']};
  }

  &[data-selected="true"] {
    background-color: ${({ theme }) => theme.colors["purple-light"]};
    border: 1px solid ${({ theme }) => theme.colors["purple"]};
  }
`