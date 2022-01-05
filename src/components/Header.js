import React from 'react'

const Header = () => {
    return (
        <header className='w-full bg-white shadow-sm flex flex-row justify-between align-middle py-6 px-4'>
            <div>
                <h2 className='cursor-pointer'>Storage App</h2>
            </div>
            <nav className='text-sm'>
                <ul className='flex gap-x-2 cursor-pointer'>
                    <li>Manage Categories</li>
                </ul>

            </nav>
            
        </header>
    )
}

export default Header
