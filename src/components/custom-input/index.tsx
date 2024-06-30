import { InputHTMLAttributes } from "react";
import { InputContainer, OptionalText } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  gridColumn?: string;
  isOptional?: boolean;
  
}

export function CustomInput({gridColumn = 'span 1 / span 1', isOptional, ...rest}: Props) {
  return (
    <>
      <InputContainer gridColumn={gridColumn }>
        <input {...rest}/>
        {isOptional && <OptionalText>Opcional</OptionalText>}
      </InputContainer>
    </>

  )
}