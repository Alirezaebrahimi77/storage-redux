import {ADD_PRODUCT, ADD_CATEGORY, DELETE_PRODUCT} from "../constants/productConstants"
export const productReducer = (state = {products: []}, action ) => {

    switch(action.type){

        case ADD_PRODUCT:

            const newProduct = {...action.payload.data, id: action.payload.id}

            return{
                
                products: [...state.products, newProduct]
                
            }

        case DELETE_PRODUCT:
            
            const updatedProducts = [...state.products]
            // const item = {...updatedProducts.find(p => p.id === action.payload)}
            // const index = updatedProducts.findIndex(p => p.id  === action.payload)

            const filteredProducts = updatedProducts.filter(p => p.id !== action.payload)
            

            
        return {
            products: filteredProducts

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