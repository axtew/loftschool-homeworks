import { takeEvery, select, put, call, fork } from 'redux-saga/effects';

import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';
import { getPhotos } from './api';
import { getApiKey } from '../Auth/selectors';

function* fetchPhotosWatcher() {
  yield takeEvery(fetchPhotosRequest, getRoversPhotos);
}

function* getRoversPhotos({ payload: { name, sol } }) {
  const apiKey = yield select(getApiKey);
  try {
    const { photos } = yield call(getPhotos, apiKey, name, sol);
    yield put(fetchPhotosSuccess({ name, sol, photos }));
  } catch (error) {
    yield put(fetchPhotosFailure({ name, sol, error }));
  }
}

export default function*() {
  yield fork(fetchPhotosWatcher);
}
