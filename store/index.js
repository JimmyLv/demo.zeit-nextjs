import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import throttle from 'lodash/throttle'

import rootSaga from './saga'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      loadingBarMiddleware(),
      createLogger()
    )
  )
)

sagaMiddleware.run(rootSaga)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default store
