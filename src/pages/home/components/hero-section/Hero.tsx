import { HeroContainer, HeroContent, HeroList } from "./styles";

import HeroImg from "../../../../assets/hero-image.png";

export function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>

        <HeroList>
          <div>
            Digo
          </div>
          <div>
            Digo
          </div>
          <div>
            Digo
          </div>
          <div>
            Digo
          </div>
        </HeroList>

      </HeroContent>
      <img src={HeroImg} alt="" />
    </HeroContainer>
  )
}