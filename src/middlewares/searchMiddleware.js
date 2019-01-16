// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import {
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchFailure
} from '../actions';
import { search } from '../api';

export const searchMiddleware = store => next => action => {
  if (action.type === fetchSearchRequest.toString()) {
    search(action.payload)
      .then(result => {
        store.dispatch(fetchSearchSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchSearchFailure(error));
      });
  }

  next(action);
};
