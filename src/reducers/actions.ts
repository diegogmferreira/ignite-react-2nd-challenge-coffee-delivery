import { PurchaseDataType } from '../pages/checkout'
import { CoffeeItem } from './reducers'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREASE_QTD = 'INCREASE_QTD',
  DECREASE_QTD = 'DECREASE_QTD',
  SUM_PURCHASE_TOTAL_PRICE = 'SUM_PURCHASE_TOTAL_PRICE',
  SET_PURCHASE_DATA = 'SET_PURCHASE_DATA'
}

export function addNewCoffeeAction(coffeeItem: CoffeeItem) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: { coffeeItem },
  }
}

export function removeCoffeeAction(coffeeItem: CoffeeItem) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { coffeeItem },
  }
}

export function increaseQtdAction(coffeeItem: CoffeeItem) {
  return {
    type: ActionTypes.INCREASE_QTD,
    payload: { coffeeItem }
  }
}

export function decreaseQtdAction(coffeeItem: CoffeeItem) {
  return {
    type: ActionTypes.DECREASE_QTD,
    payload: { coffeeItem }
  }
}

export function sumPurchaseTotalPrice() {
  return {
    type: ActionTypes.SUM_PURCHASE_TOTAL_PRICE,
  }
}

export function setPurchaseData(purchaseData: PurchaseDataType) {
  return {
    type: ActionTypes.SET_PURCHASE_DATA,
    payload: { purchaseData },
  }
}
