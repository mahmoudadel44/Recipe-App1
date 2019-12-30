import {combineReducers} from 'redux'
import searchReducer from './SearchReducer'
const rootReducer=combineReducers({
    recipes:searchReducer
})

export default rootReducer