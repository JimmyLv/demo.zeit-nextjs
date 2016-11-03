import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

import rootSaga from '../saga'
import rootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const enhancers = composeWithDevTools(
  applyMiddleware(
    sagaMiddleware,
    loadingBarMiddleware(),
    createLogger()
  )
)

export const initStore = (initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    const store = createStore(rootReducer, initialState, enhancers)
    sagaMiddleware.run(rootSaga)
    return store
  } else {
    if (!window.store) {
      window.store = createStore(rootReducer, initialState, enhancers)
      sagaMiddleware.run(rootSaga)
    }
    return window.store
  }
}
