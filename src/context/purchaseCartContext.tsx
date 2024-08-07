import { createContext, ReactNode, useEffect, useReducer } from "react";
import { PurchaseDataType } from "../pages/checkout";
import { addNewCoffeeAction, decreaseQtdAction, increaseQtdAction, removeCoffeeAction, sumPurchaseTotalPrice } from "../reducers/actions";
import { CoffeeItem, coffeePurchaseListReducer, CoffeeState } from "../reducers/reducers";

interface PurchaseCartContextType {
  coffeePurchaseList: CoffeeItem[];
  totalPrice: number;
  purchaseData: PurchaseDataType;
  addCoffee: (coffeeItem: CoffeeItem) => void;
  increaseQtd: (coffeeItem: CoffeeItem) => void;
  decreaseQtd: (coffeeItem: CoffeeItem) => void;
  removeCoffee: (coffeeItem: CoffeeItem) => void;
}

export const PurchaseCartContext = createContext({} as PurchaseCartContextType)

interface PurchaseCartContextProviderProps {
  children: ReactNode
}

export function PurchaseCartProvider({ children }: PurchaseCartContextProviderProps) {
  const initialState: CoffeeState = {
    coffeePurchaseList: [],
    totalPrice: 0,
    purchaseData: {
      zipCode: '',
      streetName: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'CREDIT'
    }
  };

  const [coffeeListState, dispatch] = useReducer(
    coffeePurchaseListReducer,
    initialState,
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

  const { coffeePurchaseList, totalPrice, purchaseData } = coffeeListState

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeListState)

    localStorage.setItem('@ignite-coffeePurchase:purchase-state-v1.0.0', stateJSON)
  }, [coffeeListState])

  function addCoffee(coffeeItem: CoffeeItem) {
    const newCoffeeItem = {
      ...coffeeItem,
      total: coffeeItem.qtd * parseFloat(coffeeItem.price),
    }

    dispatch(addNewCoffeeAction(newCoffeeItem))
  }

  function increaseQtd(coffeeItem: CoffeeItem) {
    dispatch(increaseQtdAction(coffeeItem))
  }

  function decreaseQtd(coffeeItem: CoffeeItem) {
    if (coffeeItem.qtd === 1) return
    // if (coffeeItem.qtd < 1) dispatch(removeCoffeeAction(coffeeItem))

    dispatch(decreaseQtdAction(coffeeItem))
  }

  function removeCoffee(coffeeItem: CoffeeItem) {
    dispatch(removeCoffeeAction(coffeeItem))
  }

  useEffect(() => {
    dispatch(sumPurchaseTotalPrice())
  }, [coffeeListState])

  return (
    <PurchaseCartContext.Provider
      value={{
        coffeePurchaseList,
        totalPrice,
        purchaseData,
        addCoffee,
        increaseQtd,
        decreaseQtd,
        removeCoffee,
      }}
    >
      {children}
    </PurchaseCartContext.Provider>
  )
}