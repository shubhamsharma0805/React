import React from 'react'

const Button = ({name,bg,onClick}) => {
  return (
    <>
        <button className={`text-white ${bg} px-7 py-7 rounded-md text-xl font-bold`} onClick={onClick}>
            {name}
        </button>
    </>
)
}

export default Button