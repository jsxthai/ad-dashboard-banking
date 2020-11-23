const initialState = [];

export default function history(state = initialState, action) {
  switch (action.type) {
    case "ACCESS_TRANS":
      return action.payload.trans;
    default:
      return state;
  }
}
