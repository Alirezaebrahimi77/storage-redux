import {ADD_PRODUCT, ADD_CATEGORY, DELETE_PRODUCT} from "../constants/productConstants"

export const addProduct = (id, data) => {
    return{
        type: ADD_PRODUCT,
        payload:{
            data,
            id
        }

    }
}

export const addCategory = (id, category ) => {
    return{
        type: ADD_CATEGORY,
        payload:{
            category,
            id
        }
    }
} 

export const deleteProduct = (id) => {
    return{
        type: DELETE_PRODUCT,
        payload: id
    }
}