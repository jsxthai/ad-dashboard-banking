import { LOGIN } from '../constants/actionTypes';


const initialState = []

export default function employee(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        default:
            return state;
    }

}
