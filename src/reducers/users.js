import { FETCH_USERS, CREATE_USER, PAY_IN } from '../constants/actionTypes';

const initialState = []

export default function employee(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;

        case CREATE_USER:
            return [...state, action.payload];

        case PAY_IN:
            return action.payload;
        default:
            return state;
    }

}
