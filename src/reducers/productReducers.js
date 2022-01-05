import {ADD_PRODUCT, ADD_CATEGORY} from "../constants/productConstants"
export const productReducer = (state = {products: []}, action ) => {

    switch(action.type){

        case ADD_PRODUCT:

            const newProduct = {...action.payload.data, id: action.payload.id}

            return{
                
                products: [...state.products, newProduct]
                
            }

        


        default:
            return state
    }

}

export const categoriesReducer = (state = {categories: []}, action) => {
    switch(action.type){
        case ADD_CATEGORY:
            const newCategory = {...action.payload, id: action.payload.id}

            return{
                categories: [...state.categories, newCategory]
               
            }


        default:
            return state
    }
}