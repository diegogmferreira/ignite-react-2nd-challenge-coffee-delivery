import { HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/coffee-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoCoffee} alt="" />
      </a>

      <nav>
        <div className="location">
          <MapPin weight='fill' size={22} />
          Porto Alegre, RS
        </div>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart weight="fill" size={18} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
