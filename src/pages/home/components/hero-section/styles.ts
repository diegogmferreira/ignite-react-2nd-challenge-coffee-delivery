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
  gap: 4.125rem;

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
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2.5rem;
`

export const HeroItem = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  gap: 0.5rem;

  color: ${({theme}) => theme.colors["gray-700"]};
  font-family: ${({theme}) => theme.text.roboto["font-family"]};
  font-size: ${({theme}) => theme.text.roboto["text-m"]};
  font-weight: 400;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${({theme}) => theme.colors.white};
  }
`