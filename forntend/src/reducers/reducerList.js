import {combineReducers} from 'redux'

// reducers
import loginReducer  from './loginReducer'
import registrationReducer from './registrationReducer'

const rootReducer = combineReducers({
    loginReducer,
    registrationReducer
})

export default rootReducer;