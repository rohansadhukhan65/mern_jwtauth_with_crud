import {createStore} from 'redux'


import rootReducer  from './reducers/reducerList'


const store = createStore(rootReducer)

export default store