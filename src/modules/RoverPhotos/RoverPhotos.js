import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';

const sol = handleActions(
  {
    [changeSol]: (_state, { payload }) => ({
      current: payload,
      min: 1,
      max: 100
    })
  },
  {
    current: 1,
    min: 1,
    max: 100
  }
);

const photos = handleActions(
  {
    [fetchPhotosRequest]: (state, { payload: { name, sol } }) => {
      return {
        ...state,
        [name]: Object.assign({}, state[name], {
          [sol]: { isLoading: true, isLoaded: false, photos: [] }
        })
      };
    },
    [fetchPhotosSuccess]: (state, { payload: { name, sol, photos } }) => {
      return {
        ...state,
        [name]: Object.assign({}, state[name], {
          [sol]: { isLoading: false, isLoaded: true, photos: photos }
        })
      };
    },
    [fetchPhotosFailure]: (state, { payload: { name, sol, error } }) => {
      return {
        ...state,
        [name]: Object.assign({}, state[name], {
          [sol]: { isLoading: false, isLoaded: true, error: error }
        })
      };
    }
  },
  {
    curiosity: {},
    opportunity: {},
    spirit: {}
  }
);

export default combineReducers({
  sol,
  photos
});
