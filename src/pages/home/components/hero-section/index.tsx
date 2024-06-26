import { HeroContainer, HeroContent, HeroItem, HeroList } from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import HeroImg from "../../../../assets/hero-image.png";

import { defaultTheme } from "../../../../styles/themes/default";

export function HeroSection() {
  const { colors } = defaultTheme;
  return (
    <HeroContainer>
      <HeroContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>

        <HeroList>
          <div>
            <HeroItem>
              <div style={{ backgroundColor: colors["yellow-dark"] }}>
                <ShoppingCart weight="fill" size={16} />
              </div>
              <span>Compra simples e segura</span>
            </HeroItem>
            <HeroItem>
              <div style={{ backgroundColor: colors["yellow"] }}>
                <Timer weight="fill" size={16} />
              </div>
              <span>Entrega rápida e rastreada</span>
            </HeroItem>
          </div>

          <div>
            <HeroItem>
              <div style={{ backgroundColor: colors["gray-700"] }}>
                <Package weight="fill" size={16} />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </HeroItem>

            <HeroItem>
              <div style={{ backgroundColor: colors["purple"] }}>
                <Coffee weight="fill" size={16} />
              </div>
              <span>O café chega fresquinho até você  </span>
            </HeroItem>
          </div>

        </HeroList>

      </HeroContent>
      <img src={HeroImg} alt="" />
    </HeroContainer>
  )
}