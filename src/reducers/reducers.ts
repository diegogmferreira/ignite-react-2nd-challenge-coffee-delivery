import { produce } from 'immer';
import { PurchaseDataType } from '../pages/checkout';
import { ActionTypes } from './actions';

export type CoffeeItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  tags: string[];
  imgUrl: string;
  qtd: number;
  total: number;
}

export interface CoffeeState {
  coffeePurchaseList: CoffeeItem[]
  totalPrice: number,
  purchaseData: PurchaseDataType
}

export function coffeePurchaseListReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return produce(state, (draft) => {
        draft.coffeePurchaseList.push(action.payload.coffeeItem)
      })

    case ActionTypes.INCREASE_QTD: {
      const currentCoffeePurchaseListIndex = state.coffeePurchaseList.findIndex(
        (coffeeItem) => coffeeItem.id === action.payload.coffeeItem.id,
      )

      if (currentCoffeePurchaseListIndex < 0) return state

      return produce(state, (draft) => {
        draft.coffeePurchaseList[currentCoffeePurchaseListIndex].qtd + 1
      })
    }

    case ActionTypes.DECREASE_QTD: {
      const currentCoffeePurchaseListIndex = state.coffeePurchaseList.findIndex(
        (coffeeItem) => coffeeItem.id === action.payload.coffeeItem.id,
      )

      if (currentCoffeePurchaseListIndex < 0) return state
      if (state.coffeePurchaseList[currentCoffeePurchaseListIndex].qtd === 1) return

      return produce(state, (draft) => {
        draft.coffeePurchaseList[currentCoffeePurchaseListIndex].qtd - 1
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const currentCoffeePurchaseListIndex = state.coffeePurchaseList.findIndex(
        (coffeeItem) => coffeeItem.id === action.payload.coffeeItem.id,
      )

      if (currentCoffeePurchaseListIndex < 0) return state

      return produce(state, (draft) => {
        draft.coffeePurchaseList.splice(currentCoffeePurchaseListIndex, 1);
      })
    }

    case ActionTypes.SUM_PURCHASE_TOTAL_PRICE: {
      return produce(state, (draft) => {
        draft.totalPrice = draft.coffeePurchaseList.reduce((total, coffeeItem) => {
          return total + coffeeItem.total
        }, 0)
      })
    }

    case ActionTypes.SET_PURCHASE_DATA: {
      return produce(state, (draft) => {
        draft.purchaseData = action.payload.purchaseData
      })
    }

    default:
      return state
  }
}
