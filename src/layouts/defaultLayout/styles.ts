import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  /* height: calc(100vh - 6.5rem); */
  height: 100vh;
  padding: 2.5rem;
  margin: 0 auto;

  gap: 2.5rem;

  background: ${({ theme }) => theme['gray-800']};
  display: flex;
  flex-direction: column;
`
