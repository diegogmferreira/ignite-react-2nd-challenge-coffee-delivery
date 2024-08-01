import { CoffeeItem } from './reducers'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREASE_QTD = 'INCREASE_QTD',
  DECREASE_QTD = 'DECREASE_QTD',
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
  }
}

export function decreaseQtdAction(coffeeItem: CoffeeItem) {
  return {
    type: ActionTypes.DECREASE_QTD,
  }
}
