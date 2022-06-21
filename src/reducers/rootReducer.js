import {combineReducers} from 'redux'
import products from './productReducer'
import points from './pointReducer'
import auth from './authReducer';


export default combineReducers({
    products,
    points,
    auth
})