import { FETCH } from '../constants/actionTypes';


const initialState = []

export default function employee(state = initialState, action) {
    switch (action.type) {
        case FETCH:
            return action.payload;
        default:
            return state;
    }

}
