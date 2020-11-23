import { CLEAR_QUERY_ACCOUNT, QUERY_ACCOUNT } from "../constants/actionTypes";

const initialState = {};

export default function accounts(state = initialState, { type, payload }) {
  switch (type) {
    case QUERY_ACCOUNT:
      return payload.data;
    case CLEAR_QUERY_ACCOUNT:
      return {};
    default:
      return state;
  }
}
