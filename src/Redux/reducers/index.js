import { combineReducers } from 'redux'
import { dogsReducer } from './dogsReducer'
import { tempReducer } from './temperamentsReducer'

const rootReducer = combineReducers({
    dogsReducer,
    tempReducer
})

export default rootReducer