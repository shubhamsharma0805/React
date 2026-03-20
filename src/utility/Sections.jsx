import React from 'react'

const Sections = ({children}) => {
  return (
    <div className='h-screen bg-gray-800 flex items-center justify-center'>
        <div>{children}</div>
    </div>
  )
}

export default Sections