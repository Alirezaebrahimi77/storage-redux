import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, categoriesReducer } from "./reducers/productReducers";
import thunk from "redux-thunk"

const reducer = combineReducers({
    products: productReducer,
    categories: categoriesReducer
    
 
})

let initialState = {}
const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));


export default store