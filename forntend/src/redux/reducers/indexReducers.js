import {combineReducers} from 'redux';
import {loginReducer} from './userReducer';
import {readReducer} from './crudReducers'

const reducersindex = combineReducers({
    login: loginReducer,
    read: readReducer
    

})

export default reducersindex;