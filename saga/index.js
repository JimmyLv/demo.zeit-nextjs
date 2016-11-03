import 'isomorphic-fetch'

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { call, take, put, fork } from 'redux-saga/effects'

import {
  SAY_HELLO,
  SAY_HELLO_DONE,
  SAY_HELLO_ERROR,
} from '../constants/actionTypes'

const fetchData = url => fetch(url).then(res => res.json())

function* fetchGuys() {
  try {
    yield take(SAY_HELLO)
    yield put(showLoading())
    const json = yield call(fetchData, 'https://jimmylv.github.io/api/guys.json')
    yield put({ type: SAY_HELLO_DONE, payload: json })
  } catch (err) {
    yield put({ type: SAY_HELLO_ERROR, payload: err })
  } finally {
    yield put(hideLoading())
  }
}

export default function* rootSaga() {
  yield [
    fork(fetchGuys),
  ]
}