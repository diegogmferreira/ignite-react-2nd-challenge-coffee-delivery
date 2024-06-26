import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 2.5rem;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    .location {
      display: flex;
      gap: .25rem;
      padding: 0.5rem;
      border-radius: 6px;

      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.colors['purple-light']};
      color: ${({ theme }) => theme.colors['purple-dark']};
      font-family: ${({ theme }) => theme.text.roboto['font-family']};
      font-size: ${({ theme }) => theme.text.roboto['text-s']['font-size']};
      font-weight: ${({ theme }) => theme.text.roboto['text-s']['font-weight']};
      line-height: 1rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center; 
      width: 2.375rem;
      height: 2.375rem;

      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.colors['yellow-light']};
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`
