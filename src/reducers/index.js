import { combineReducers } from 'redux';
import users from './users'
import login from './login'
import payin from './payin'

export default combineReducers({
    users,
    login,
    payin,
})