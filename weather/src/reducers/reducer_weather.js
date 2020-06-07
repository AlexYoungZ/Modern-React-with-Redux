import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}