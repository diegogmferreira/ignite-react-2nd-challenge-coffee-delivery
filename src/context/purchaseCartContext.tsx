import { createContext, ReactNode } from "react";
import { PurchaseDataType } from "../pages/checkout";

type CoffeeItem = {
  title: string;
  description: string;
  price: string;
  tags: string[];
  imgUrl: string;
}

interface PurchaseCartContextType {
  coffeeItemList: CoffeeItem[];
  total: number;
  purchaseData: PurchaseDataType;
}

export const PurchaseCartContext = createContext({} as PurchaseCartContextType)

interface PurchaseCartContextProviderProps {
  children: ReactNode
}

export function PurchaseCartProvider({ children }: PurchaseCartContextProviderProps) {
  

  return (
    <PurchaseCartContext.Provider
      value={{
        
      }}
    >
      {children}
    </PurchaseCartContext.Provider>
  )
}