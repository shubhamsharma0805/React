import React, {useState} from 'react'
import Button from '../../utility/Button'
import Sections from '../../utility/sections';

const Hook = () =>{

    const [count, setCount] = useState(0);
    
    function inc(){
        setCount(count + 1)
    }

    function dec(){
        setCount(count - 1)
    }

    console.log(count);
    
  return (
    <>

       <Sections >


            <h1 className='text-4xl text-white'>Count: {count}</h1>
        
        <div className='flex justify-center gap-10 mt-8'>
            <Button name={"INC +"} bg={"bg-green-400"} onClick={inc}></Button>
            <Button name={"DEC -"} bg={"bg-red-400"} onClick={dec}></Button>

        </div>
        

    </Sections>
       

    </>
  )
}

export default Hook