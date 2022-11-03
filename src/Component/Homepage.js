import React from 'react'
import Addtodo from './addtodo'
import Todocontent from './todocontent'

const Homepage = () => {
    let completetdTask = localStorage.getItem("number")
    let totalTask = localStorage.getItem("totaltask")
    let remainingTask = localStorage.getItem("remaining")
     console.log(remainingTask)
    // console.log(numberoftaskdone);
    // console.log(numberoftask);
   
  return (
    <div>
        <div className='p-5'>
            <h1 className='text-center text-3xl font-semibold'>My Tasks</h1>
            <div className='flex justify-around mt-5 text-lg'>
                <p>TotalTask:{totalTask===null ?0 :totalTask}</p>
                <p>CompletedTask:{completetdTask ===null ?0:completetdTask}</p>
                <p>RemainingTask:{remainingTask==="null"? 0: remainingTask}</p>
            </div>
        
        <Addtodo />
        <div className='mt-3'>
        <Todocontent  />
        </div>
        
        

        </div>
        
    </div>
  )
}

export default Homepage