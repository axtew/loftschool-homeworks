import { createAction } from 'redux-actions';

export const fetchRequest = createAction('FETCH_FOLLOWERS_REQUEST');
export const fetchSuccess = createAction('FETCH_FOLLOWERS_SUCCESS');
export const fetchFailure = createAction('FETCH_FOLLOWERS_FAILURE');
