import {
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchFailure
} from '../actions';

const searchState = {
  isFetching: false,
  result: [],
  error: null
};

export default (state = searchState, action) => {
  switch (action.type) {
    case fetchSearchRequest.toString():
      return {
        ...state,
        result: [],
        isFetching: true
      };

    case fetchSearchSuccess.toString():
      return {
        ...state,
        result: action.payload,
        isFetching: false
      };

    case fetchSearchFailure.toString():
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};
