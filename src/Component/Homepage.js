import React from 'react'
import Addtodo from './addtodo'
import Todocontent from './todocontent'

const Homepage = () => {
 
    
  
   
  return (
    <div>
        <div className='p-5'>
            <h1 className='text-center text-3xl font-semibold'>My Tasks</h1>
          
        
        <Addtodo />
        <div className='mt-3'>
        <Todocontent  />
        </div>
        
        

        </div>
        
    </div>
  )
}

export default Homepage