import { HeaderContainer } from './styles'

import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/coffee-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={40} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
