// @flow

import type { GuyType } from '../constants/state.flow'
import type { HelloAction } from '../constants/action.flow'
import { actionTypes } from '../constants/action.flow'

const NAME = 'guys'

const initialState = [
  {
    name: 'JimmyLv',
    age: 23
  }
]

function reducer(state: Array<GuyType> = initialState,
                  action: HelloAction): Array<GuyType> {
  const { type, payload } = action
  
  switch (type) {
    case actionTypes.SAY_HELLO_DONE:
      return [...payload]
    case actionTypes.SAY_HELLO_ERROR:
      console.warn('Failed to fetch guys list!', payload)
      return state
    default:
      return state
  }
}

export default { NAME, reducer }
