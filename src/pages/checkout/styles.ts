import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex: 1;
  gap: 2.5rem;
`

export const CheckoutTitles = styled.p`
  font-family: ${({theme}) => theme.text['baloo-2']['font-family']};
  font-size: ${({theme}) => theme.text['baloo-2']['title-xs']['font-size']};
  font-weight: ${({theme}) => theme.text['baloo-2']['title-xs']['font-weight']};
  color: ${({theme}) => theme.colors['gray-800']};
`