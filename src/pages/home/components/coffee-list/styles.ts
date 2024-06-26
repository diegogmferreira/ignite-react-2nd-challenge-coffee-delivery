import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* gap: 2.125rem; //34 */
  gap: 3.375rem; //54
  margin-bottom: 64px;

  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr)
  }
`

export const CoffeeListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CoffeeListTitle = styled.h3`
  font-family: ${({ theme }) => theme.text["baloo-2"]["font-family"]};
  font-size: ${({ theme }) => theme.text["baloo-2"]["title-l"]["font-size"]};
  font-weight: ${({ theme }) => theme.text["baloo-2"]["title-l"]["font-weight"]};
  color: ${({ theme }) => theme.colors["gray-800"]};
`

export const CoffeeListFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const CoffeeListFilterItem = styled.button`
  padding: 0.375rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors["yellow-dark"]};
  border-radius: 100px;

  color: ${({ theme }) => theme.colors["yellow-dark"]};
  font-family: ${({ theme }) => theme.text.roboto["font-family"]};
  font-size: ${({ theme }) => theme.text.roboto.tag["font-size"]};
  font-weight: ${({ theme }) => theme.text.roboto.tag["font-weight"]};
  line-height: 130%;

  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    color: ${({ theme }) => theme.colors.white};
  }

  transition: all ease 500;
`