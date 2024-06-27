import styled from "styled-components";

export const CoffeeListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 26px;

  background-color: ${({ theme }) => theme.colors["gray-200"]};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 0.75rem;
    margin-top: -20px
  }

  .card-tags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem ;

    margin-bottom: 1rem;

    .tag-item {
      padding: 0.25rem 0.5rem;
      background-color: ${({ theme }) => theme.colors["yellow-light"]};
      border-radius: 100px;

      color: ${({ theme }) => theme.colors["yellow-dark"]};
      font-family: ${({ theme }) => theme.text.roboto["font-family"]};
      font-size: ${({ theme }) => theme.text.roboto.tag["font-size"]};
      font-weight: ${({ theme }) => theme.text.roboto.tag["font-weight"]};
      line-height: 130%;

      text-transform: uppercase;
    }
  } 

  .card-title {
    color: ${({ theme }) => theme.colors["gray-800"]};
    font-family: ${({ theme }) => theme.text["baloo-2"]["font-family"]};
    font-size: ${({ theme }) => theme.text["baloo-2"]["title-s"]["font-size"]};
    font-weight: ${({ theme }) => theme.text["baloo-2"]["title-s"]["font-weight"]};
    line-height: 130%;

    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  .card-description {
    color: ${({ theme }) => theme.colors["gray-600"]};
    font-family: ${({ theme }) => theme.text.roboto["font-family"]};
    font-size: ${({ theme }) => theme.text.roboto["text-s"]["font-size"]};
    font-weight: ${({ theme }) => theme.text.roboto["text-s"]["font-weight"]};
    line-height: 130%;

    text-align: center;
  }

  .card-purchase {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1.125rem;
    align-items: baseline;
    justify-content: space-around;

    p {
      color: ${({ theme }) => theme.colors["gray-700"]};
      font-family: ${({ theme }) => theme.text.roboto["font-family"]};
      font-size: ${({ theme }) => theme.text.roboto["text-s"]["font-size"]};
      font-weight: ${({ theme }) => theme.text.roboto["text-s"]["font-weight"]};
      line-height: 130%;

      .price {
        color: ${({ theme }) => theme.colors["gray-700"]};
        font-family: ${({ theme }) => theme.text["baloo-2"]["font-family"]};
        font-size: ${({ theme }) => theme.text["baloo-2"]["title-m"]["font-size"]};
        font-weight: ${({ theme }) => theme.text["baloo-2"]["title-m"]["font-weight"]};
      }
    }
  }
`

export const CardActionsButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .cart-button {
      display: flex;
      align-items: center;
      justify-content: center; 
      width: 2.375rem;
      height: 2.375rem;

      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.colors['purple-dark']};
      color: ${({ theme }) => theme.colors['gray-200']};

      cursor: pointer;

      &:hover {
        filter: brightness(.8)
      }
    }
`