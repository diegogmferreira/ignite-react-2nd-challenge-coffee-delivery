import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* align-items: flex-start; */
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  .coffee-card-info {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      height: 4rem;
      width: 4rem;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      color: ${({ theme }) => theme.colors['gray-800']};
      font-family: ${({ theme }) => theme.text.roboto['font-family']};
      font-size: ${({ theme }) => theme.text.roboto["text-m"]};
      line-height: 130%;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .remove-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .25rem;
      padding: 0 .5rem;
      height: 2.375rem;

      background-color: ${({ theme }) => theme.colors['gray-400']};
      border-radius: 6px;
      border: none;

      color: ${({ theme }) => theme.colors['gray-700']};
      font-family: ${({theme}) => theme.text.roboto["font-family"]};
      font-size: ${({theme}) => theme.text.roboto["button-m"]["font-size"]};
      line-height: 130%;
      text-transform: uppercase;

      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors['gray-500']};
        color: ${({ theme }) => theme.colors['gray-800']};
      }
    }
  }

  .coffee-price {
    font-family: ${({ theme }) => theme.text.roboto['font-family']};
    font-size: ${({ theme }) => theme.text.roboto["text-m"]};
    font-weight: 700;
    line-height: 130%;
  }
`