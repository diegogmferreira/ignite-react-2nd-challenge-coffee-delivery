import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { CartCheckout } from "./components/cart-checkout";
import { UserInformation } from "./components/user-information";
import { userInfoSchema } from "./components/user-information/userInfoSchema";
import { Container } from "./styles";

export type PurchaseDataType = z.infer<typeof userInfoSchema>

export function Checkout() {
  const userInfoForm = useForm<PurchaseDataType>({
    resolver: zodResolver(userInfoSchema),
  })

  const { handleSubmit } = userInfoForm

  const onFormSubmit: SubmitHandler<PurchaseDataType> = data => {
    console.log(data)
  }

  return (
    <FormProvider {...userInfoForm}>
      <Container onSubmit={handleSubmit(onFormSubmit)}>
        <UserInformation />
        <CartCheckout />
      </Container>
    </FormProvider>
  )
}