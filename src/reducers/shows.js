import {
  fetchShowRequest,
  fetchShowSuccess,
  // fetchShowFailure
} from '../actions';

const showState = {
  entities: [],
  isFetching: false
};

export default (state = showState, action) => {
  switch (action.type) {
    case fetchShowRequest.toString():
      return {
        ...state,
        entities: [],
        isFetching: true
      };

    case fetchShowSuccess.toString():
      return {
        ...state,
        entities: action.payload,
        isFetching: false
      };

    // case fetchShowFailure.toString():
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };

    default:
      return state;
  }
};
