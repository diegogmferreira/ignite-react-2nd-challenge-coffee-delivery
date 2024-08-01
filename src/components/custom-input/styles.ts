import styled from "styled-components";

type InputContainerProps = {
  gridColumn: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;  
  align-items: center;
  width: 100%;
  grid-column: ${({ gridColumn }) => gridColumn};
  height: 2.625rem;
  position: relative;
  padding: 0.75rem;
  
  background-color: ${({ theme }) => theme.colors['gray-300']};
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 4px;

  input {
    width: 100%;
    height: 2.625rem;
    font-family: ${({ theme }) => theme.text.roboto['font-family']};
    font-size: ${({ theme }) => theme.text.roboto["text-s"]["font-size"]};
    font-weight: ${({ theme }) => theme.text.roboto["text-s"]["font-weight"]};
    color: ${({ theme }) => theme.colors['gray-700']};
    line-height: 130%;

    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-600']};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px ${({theme}) => theme.colors["gray-300"]} inset;
      -webkit-text-fill-color: ${({ theme }) => theme.colors['gray-700']} !important;
    }
  }

  &:focus-within, &:active {
    border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const OptionalText = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-family: ${({ theme }) => theme.text.roboto['font-family']};
  font-size: ${({ theme }) => theme.text.roboto["text-xs"]["font-size"]};
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: 130%;
  font-style: italic;
`

export const ErrorText = styled.span`
  font-family: ${({ theme }) => theme.text.roboto['font-family']};
  font-size: ${({ theme }) => theme.text.roboto["text-xs"]["font-size"]};
  color: ${({ theme }) => theme.colors['red-error']};
  padding-left: 0.75rem;
`