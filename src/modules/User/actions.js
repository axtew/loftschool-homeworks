import { createAction } from 'redux-actions';

export const fetchRequest = createAction('FETCH_USER_REQUEST');
export const fetchSuccess = createAction('FETCH_USER_SUCCESS');
export const fetchFailure = createAction('FETCH_USER_FAILURE');
