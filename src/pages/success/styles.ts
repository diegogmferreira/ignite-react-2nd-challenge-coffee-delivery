import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2.5rem;

  .confirm-texts {
    h1 {
      font-family: ${({ theme }) => theme.text["baloo-2"]["font-family"]};
      font-size: ${({ theme }) => theme.text["baloo-2"]["title-l"]["font-size"]};
      font-weight: ${({ theme }) => theme.text["baloo-2"]["title-l"]["font-weight"]};
      line-height: 130%;

      color: ${({ theme }) => theme.colors["yellow-dark"]};
    }

    p {
      font-family: ${({ theme }) => theme.text.roboto["font-family"]};
      font-size: ${({ theme }) => theme.text.roboto["text-l"]};
      line-height: 130%;
    }
  }

  .sumarize {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sumarize_info {
      display: flex;
      flex-direction: column;
      padding: 2.5rem;
      width: 34rem;
      gap: 2rem;

      background: 
        linear-gradient(#fff 0 0) padding-box,
        linear-gradient(135deg, #DBAC2C, #8047F8) border-box;

      border: 1px solid transparent;
      border-radius: 6px 36px 6px 36px;
    }

    .info {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;

        border-radius: 50%;
        color: ${({theme}) => theme.colors.white};
      }

      div {
        display: flex;
         flex-direction: column;

         color: ${({theme}) => theme.colors["gray-700"]};
         font-family: ${({theme}) => theme.text.roboto["font-family"]};
         font-size: ${({theme}) => theme.text.roboto["text-m"]};
         line-height: 130%;
      }
    }

    img {
      width: 30rem;
    }
  }
`