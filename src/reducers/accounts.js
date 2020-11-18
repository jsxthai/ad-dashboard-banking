const initialState = {

}

export default function accounts(state = initialState, { type, payload }) {
    switch (type) {
        case 'QUERY_ACCOUNT':
            return payload.data;
        default:
            return state;
    }
}