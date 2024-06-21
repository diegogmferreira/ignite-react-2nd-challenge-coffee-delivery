import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
  align-items: center;
`;

export const HeroContent = styled.div`
  /* gap: 1rem; */

  div {
    h1 {
    font-family: ${({ theme }) => theme.text["baloo-2"]["font-family"]};
    font-size: ${({ theme }) => theme.text["baloo-2"]["title-xl"]["font-size"]};
    font-weight: ${({ theme }) => theme.text["baloo-2"]["title-xl"]["font-weight"]};
    color: ${({ theme }) => theme.colors["gray-900"]};
    }

    p {
      font-family: ${({ theme }) => theme.text.roboto["font-family"]};
      font-size: ${({ theme }) => theme.text.roboto["text-l"]};
      font-weight: 400;
      color: ${({ theme }) => theme.colors["gray-800"]};
    }
  }
  
`