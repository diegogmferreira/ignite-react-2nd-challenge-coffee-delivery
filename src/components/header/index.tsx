import { HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/coffee-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <div className="location">
          <MapPin weight='fill' size={22} />
          Porto Alegre, RS
        </div>
        <NavLink to="/history" title="Histórico">
        <ShoppingCart weight="fill" size={18} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
