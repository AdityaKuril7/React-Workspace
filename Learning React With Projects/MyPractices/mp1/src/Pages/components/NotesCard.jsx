import React from 'react'

function NotesCard({numofnotes}) {
  return (
    <div className=''>
        <nav className='bg-red-500 flex space-x-4'>
            <p>Note No {numofnotes}</p>
            <input type="date" />
        </nav>
    </div>
  )
}

export default NotesCard