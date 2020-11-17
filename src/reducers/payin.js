import { PAY_IN } from '../constants/actionTypes';

const initialState = false

export default function employee(state = initialState, action) {
    switch (action.type) {
        case PAY_IN:
            return true;
        default:
            return state;
    }

}
