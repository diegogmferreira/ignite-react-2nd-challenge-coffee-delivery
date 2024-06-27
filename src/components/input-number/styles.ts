import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors["gray-400"]};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors["gray-900"]};
  font-family: ${({ theme }) => theme.text.roboto["font-family"]};
  font-size: ${({ theme }) => theme.text.roboto["text-m"]};
  line-height: 130%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: 0;
    outline: 0;

    color: ${({ theme }) => theme.colors["purple"]};
    line-height: 130%;

    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }
`