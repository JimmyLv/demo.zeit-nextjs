import 'isomorphic-fetch'

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { call, take, put, fork } from 'redux-saga/effects'

import { actionTypes } from '../constants/action.flow'

const fetchData = url => fetch(url).then(res => res.json())

function* fetchGuys() {
  try {
    yield take(actionTypes.SAY_HELLO)
    yield put(showLoading())
    const json = yield call(fetchData, 'https://jimmylv.github.io/api/guys.json')
    yield put({ type: actionTypes.SAY_HELLO_DONE, payload: json })
  } catch (err) {
    yield put({ type: actionTypes.SAY_HELLO_ERROR, payload: err })
  } finally {
    yield put(hideLoading())
  }
}

export default function* rootSaga() {
  yield [
    fork(fetchGuys),
  ]
}