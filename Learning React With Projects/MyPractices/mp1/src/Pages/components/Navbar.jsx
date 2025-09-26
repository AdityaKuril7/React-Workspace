import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
    return (
        <nav className='flex flex-col items-center pt-5 pb-5 bg-blue-500 w-[100vw] h-auto '>
            <p
                className='text-3xl text-white font-semibold font-serif'
            >Notes Taking</p>
            <Link to={props.linking}>
                <button
                    className='bg-gray-900 mt-5 p-2 text-[20px] text-white rounded-2xl'
                >
                    {props.button}
                </button>
            </Link>
        </nav>
    )
}

export default Navbar