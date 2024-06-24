import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
  align-items: center;
  gap: 56px;

  img {
    height: 360px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 34rem;
  gap: 1rem;

  align-items: start;
  justify-content: center;

  div {
    h1 {
      font-family: ${({ theme }) => theme.text["baloo-2"]["font-family"]};
      font-size: ${({ theme }) => theme.text["baloo-2"]["title-xl"]["font-size"]};
      font-weight: ${({ theme }) => theme.text["baloo-2"]["title-xl"]["font-weight"]};
      color: ${({ theme }) => theme.colors["gray-900"]};
      margin-bottom: 1rem;
    }

    p {
      font-family: ${({ theme }) => theme.text.roboto["font-family"]};
      font-size: ${({ theme }) => theme.text.roboto["text-l"]};
      font-weight: 400;
      color: ${({ theme }) => theme.colors["gray-800"]};
      line-height: 130%;
    }
  }
  
`

export const HeroList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  background-color: red;
`