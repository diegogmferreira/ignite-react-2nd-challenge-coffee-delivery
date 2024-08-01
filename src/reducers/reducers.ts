import { produce } from 'immer';
import { PurchaseDataType } from '../pages/checkout';
import { ActionTypes } from './actions';

export type CoffeeItem = {
  title: string;
  description: string;
  price: string;
  tags: string[];
  imgUrl: string;
}

interface CoffeeState {
  coffeeList: CoffeeItem[]
  total: 0,
  purchaseData: PurchaseDataType
  // activeCycleId: string | null
}

export function coffeeListReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.INTERRUPT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    }

    case ActionTypes.FINISH_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }

    default:
      return state
  }
}
