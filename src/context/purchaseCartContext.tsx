import { createContext, ReactNode, useReducer } from "react";
import { PurchaseDataType } from "../pages/checkout";
import { coffeeListReducer } from "../reducers/reducers";

type CoffeeItem = {
  title: string;
  description: string;
  price: string;
  tags: string[];
  imgUrl: string;
}

interface PurchaseCartContextType {
  coffeeList: CoffeeItem[];
  total: number;
  purchaseData: PurchaseDataType;
}

export const PurchaseCartContext = createContext({} as PurchaseCartContextType)

interface PurchaseCartContextProviderProps {
  children: ReactNode
}

export function PurchaseCartProvider({ children }: PurchaseCartContextProviderProps) {
  const [coffeeListState, dispatch] = useReducer(
    coffeeListReducer,
    {
      coffeeList: [],
      total: 0,
      purchaseData: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
        paymentMethod: '',
      }
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffeePurchase:purchase-state-v1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { coffeeList, total, purchaseData } = coffeeListState

  return (
    <PurchaseCartContext.Provider
      value={{
        coffeeList,
        total,
        purchaseData
      }}
    >
      {children}
    </PurchaseCartContext.Provider>
  )
}