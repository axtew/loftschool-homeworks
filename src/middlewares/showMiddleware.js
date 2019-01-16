// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import { fetchShowRequest, fetchShowSuccess } from '../actions';
import { show } from '../api';

export const showMiddleware = store => next => action => {
  if (action.type === fetchShowRequest.toString()) {
    show(action.payload)
      .then(result => {
        store.dispatch(fetchShowSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  }

  next(action);
};
