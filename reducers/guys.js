// @flow

import { SAY_HELLO_DONE, SAY_HELLO_ERROR } from '../constants/actionTypes'
import type { Guy } from '../constants/state.flow'
import type { HelloAction } from '../constants/action.flow'

const NAME = 'guys'

const initialState = [
  {
    name: 'JimmyLv',
    age: 23
  }
]

function reducer(state: Array<Guy> = initialState,
                  action: HelloAction): Array<Guy> {
  const { type, payload } = action
  
  switch (type) {
    case SAY_HELLO_DONE:
      return [...payload]
    case SAY_HELLO_ERROR:
      console.warn('Failed to fetch guys list!', payload)
      return state
    default:
      return state
  }
}

export default { NAME, reducer }
