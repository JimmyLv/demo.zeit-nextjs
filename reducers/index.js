import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import guys from './guys'

export default combineReducers({
  [guys.NAME]: guys.reducer,
  loadingBar: loadingBarReducer
})
