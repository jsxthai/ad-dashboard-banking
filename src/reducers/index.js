import { combineReducers } from 'redux';
import users from './users'
import login from './login'
import payin from './payin'
import accounts from './accounts'

export default combineReducers({
    users,
    login,
    payin,
    accounts,
})