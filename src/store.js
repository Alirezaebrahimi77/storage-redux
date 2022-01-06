import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, categoriesReducer } from "./reducers/productReducers";
import thunk from "redux-thunk"

const reducer = combineReducers({
    products: productReducer,
    categories: categoriesReducer
    
 
})

let initialState = {
    categories:{
        categories: localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : []
    },
    products:{
        products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
    }
}
const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));


export default store