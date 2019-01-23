import { takeLatest, select, put, call, fork } from 'redux-saga/effects';

import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth/selectors';
import { getUserInfo } from './api';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey);

  try {
    const user = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(user));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
