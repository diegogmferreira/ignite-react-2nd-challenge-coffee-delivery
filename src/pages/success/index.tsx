import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import confirmImg from '../../assets/confirm-Illustration.svg';
import { Container } from "./styles";

export function SuccessPage() {
  const { colors } = useTheme();

  return (
    <Container>
      <div className="confirm-texts">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você.</p>
      </div>

      <div className="sumarize">
        <div className="sumarize_info">
          <div className="info">
            <div className="icon" style={{ backgroundColor: colors["purple"] }}>
              <MapPin weight="fill" size={16} />
            </div>
            <div>
              <span>Entrega em <b>Rua John Doe, 102</b></span>
              Farrapos  - Angatuba, SP
            </div>
          </div>

          <div className="info">
            <div className="icon" style={{ backgroundColor: colors.yellow }}>
              <Timer weight="fill" size={16} />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <b>20 min - 30 min</b>
            </div>
          </div>

          <div className="info">
            <div className="icon" style={{ backgroundColor: colors['yellow-dark'] }}>
              <CurrencyDollar weight="fill" size={16} />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <b>Cartão de Crédito</b>
            </div>
          </div>
        </div>

        <img src={confirmImg} alt="" />
      </div>
    </Container>
  )
}