import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { InputContainer, OptionalText } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  gridColumn?: string;
  isOptional?: boolean;

}

export function CustomInput({ gridColumn = 'span 1 / span 1', isOptional, ...rest }: Props) {
  const { formState: { errors } } = useFormContext()

  return (
    <>
      <InputContainer gridColumn={gridColumn}>
        <input {...rest} />
        {isOptional && <OptionalText>Opcional</OptionalText>}
      </InputContainer>

      {/* {(rest.name && errors[rest.name]) && <ErrorText>{errors[rest.name]?.message as string}</ErrorText>} */}
    </>
  )
}