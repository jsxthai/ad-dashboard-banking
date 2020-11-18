const initialState = {
}

export default function accounts(state = initialState, { type, payload }) {
    switch (type) {
        case 'QUERY_ACCOUNT':
            return payload.data;
        case 'CLEAR_QUERY_ACCOUNT':
            return {
                ...state,
                fullname: ''
            };
        default:
            return state;
    }
}