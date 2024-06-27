import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer } from "./styles";

interface Props {
  orderQtd: number;
  handleChangeQtd: (action: "INCREMENT" | "DECREMENT") => void;
}

export function InputNumber({ orderQtd, handleChangeQtd }: Props) {
  return (
    <InputNumberContainer>
      <button onClick={() => handleChangeQtd("DECREMENT")}>
        <Minus size={14} weight="light" />
      </button>

      <span>&nbsp;{orderQtd}&nbsp;</span>

      <button onClick={() => handleChangeQtd("INCREMENT")}>
        <Plus size={14} weight="light" />
      </button>
    </InputNumberContainer>
  )
}