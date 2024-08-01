import { z } from "zod";

export const userInfoSchema = z.object({
  zipCode: z.string().min(9, 'Invalid CEP').max(9),
  streetName: z.string().min(1, "Street name cannot be empty"),
  number: z.string().min(1, "Number cannot be empty"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Neighborhood cannot be empty"),
  city: z.string().min(1, "City cannot be empty"),
  state: z.string().min(2, "State cannot be empty").max(2, "State must be 2 characters long"),
  paymentMethod: z.enum(["CREDIT", "DEBIT", "CASH"]),
})