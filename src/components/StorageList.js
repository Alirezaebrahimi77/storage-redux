import React, {useState} from 'react'
import {GrFormAdd} from "react-icons/gr"
import { useDispatch, useSelector } from 'react-redux'
import {addProduct, addCategory} from "../actions/productActions"
import {AiOutlineCloseCircle} from "react-icons/ai"
const StorageList = () => {
    const dispatch = useDispatch()
    const [showCategory, SetShowCategory] = useState(false)
    const [product, setProduct] = useState({

        title: "",
        category: "select"
    })
    const [category, setCategory] = useState({category: ""})

    const {categories} = useSelector(state => state.categories)

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(product.category === "select" || !product.title){
            return alert("Select Category or Type Product Name!")
        }else if(product.title.length > 30){
            return alert("Product title can't be this long")
        }else{
            const id = Math.floor(Math.random() * 1000)
            dispatch(addProduct(id, product))



        }
    }

    const categoryHandler = (e)=> {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1000)
        dispatch(addCategory(id, category))
    }
    return (
        <div className='w-full p-12 h-full'>
            <div className='w-90 xl:w-90 m-auto border-2 border-gray-100 p-3 shadow-sm rounded-sm'>
                <p className='text-xl text-center mb-4'>Add Product:</p>
                <form onSubmit={submitHandler}>
                    <div className='flex items-center mb-5'>
                        <label htmlFor="productName" className='text-sm mr-4'>Product Name:</label>
                    <input type="text" id="productName" className='border-2 rounded-md text-sm outline-emerald-400 py-1 px-3' name="title" value={product.title} onChange={changeHandler} />
                    

                    </div>
                    <div className='flex items-center'>
                        <label htmlFor="productCategory" className='text-sm mr-4'>Select Category:</label>
                        <select name="category" id="productCategory" className='border-2 border-emerald-400 outline-none py-1 px-6 rounded-md text-sm' value={product.category} onChange={changeHandler} >
                            <option value="select" disabled>Select</option>
                            {/* <option value="electric">Electric</option>
                            <option value="wood">Wood</option>
                            <option value="metal">Metal</option> */}
                            {categories && categories.map(c => (
                                <option key={c.id} value={c.category}>{c.category}</option>
                            ))}
                        </select>
                
                    </div>
                    <button className='mt-6 py-1 px-4 bg-emerald-400 cursor-pointer rounded-md text-white text-sm w-full hover:shadow-xl transition duration-300'>Add</button>

                </form>

            
               <p className='text-emerald-900 text-sm underline mt-6 cursor-pointer hover:no-underline' onClick={() => SetShowCategory(!showCategory)}>Add category</p>


                

                
            

            </div>
            <div className={`w-full border-2 border-gray-100 rounded-sm fixed bottom-0 right-0 left-0 p-6 transition duration-300 translate-y-full ${showCategory && "translate-y-0"}`}>
                    <div className="w-full flex justify-end">
                        <AiOutlineCloseCircle className='text-emerald-400 text-xl cursor-pointer' onClick={() => SetShowCategory(!showCategory)}/>
                        

                    </div>

                        <form onSubmit={categoryHandler} className='w-full flex py-6'>
                            <input type="text" placeholder='Category...' value={category.category} onChange={(e) => setCategory(e.target.value)} className='flex-1 border-2 rounded-md text-sm outline-emerald-400 py-1 px-3 mr-6'/>
                            <button className='py-1 px-4 rounded-md text-white text-sm bg-emerald-400'>Add category</button>
                        </form>
                </div>
            
            
        </div>
    )
}

export default StorageList