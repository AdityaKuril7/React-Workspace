import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'

function Home() {
    return (
        <div className='flex flex-col items-center'>
            <Navbar linking={"/Notes"} button={"Add Notes"} />
            <div className="history border w-[100vw] h-[100vh] bg-gray-900 ">
                <h1>hello world</h1>
            </div>
        </div>
    )
}

export default Home