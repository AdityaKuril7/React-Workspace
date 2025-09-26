import React, { useState } from 'react'
import Navbar from './components/Navbar'

function Notes() {
    const [note, setNote] = useState("");
    return (
        <div>
            <Navbar linking="/" button="Home" />
            <div className='bg-gray-900 flex items-center justify-center h-[100vh] w-[100vw] '>
                <div className='card bg-white border w-[80vw] h-[80vh] '>
                    {/* headersection */}
                    <header
                        className='flex justify-between mr-10 ml-10'
                    >
                        <p
                            className='text-2xl font-semibold'
                        >Notes</p>
                        <input
                            type="date"
                            onChange={(e) => setNote(e.target.value)}
                            className='p-2 border'
                        />
                    </header>

                    {/* writingsection */}
                    <main className='flex flex-col justify-center items-center'>
                        <textarea
                            name=""
                            id=""
                            className="w-full h-60 border shadow-2md border-gray-300 rounded-xl p-4 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        >

                        </textarea>

                        {/* buttons */}
                        <div>
                            <button
                                className='border'
                            >
                                close
                            </button>
                            <button
                                className='border'
                            >
                                save
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Notes