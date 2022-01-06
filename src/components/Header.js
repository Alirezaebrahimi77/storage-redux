import React from 'react'
import { useSelector } from 'react-redux'
const Header = () => {

    const {products } = useSelector(state => state.products)
    return (
        <header className='w-full bg-white shadow-sm flex flex-row justify-between align-middle py-6 px-4'>
            <div>
                <h2 className='cursor-pointer'>Storage Department</h2>
            </div>
            <nav className='text-sm'>
                <ul className='flex gap-x-2 cursor-pointer'>
                    <li>All Products: {products.length}</li>
                </ul>

            </nav>
            
        </header>
    )
}

export default Header
