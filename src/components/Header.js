import React from 'react'

const Header = () => {
    return (
        <header className='w-full bg-white shadow-sm flex flex-row justify-between align-middle py-6 px-4'>
            <div>
                <h2 className='cursor-pointer'>Storage Tracker</h2>
            </div>
            <nav>
                <ul className='flex gap-x-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                </ul>

            </nav>
            
        </header>
    )
}

export default Header
