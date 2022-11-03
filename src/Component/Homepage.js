import React from 'react'
import Addtodo from './addtodo'
import Todocontent from './todocontent'

const Homepage = (props) => {

  const func = props.func
  console.log(func);
 
    
  
   
  return (
    <div>
        <div className='p-5'>
            <h1 className='text-center text-3xl font-semibold'>My Tasks</h1>
          
        
        <Addtodo />
        <div className='mt-3'>
        <Todocontent  func={func}  />
        </div>
        
        

        </div>
        
    </div>
  )
}

export default Homepage