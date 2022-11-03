import React from 'react'
import Addtodo from './addtodo'
import Todocontent from './todocontent'

const Homepage = () => {
    let completetdTask = localStorage.getItem("number")
    let totalTask = localStorage.getItem("totaltask")
    let remainingTask = localStorage.getItem("remaining")
    // console.log(numberoftaskdone);
    // console.log(numberoftask);
   
  return (
    <div>
        <div>
            <h1 className='text-center text-3xl font-semibold'>My Tasks</h1>
            <div className='flex justify-around mt-5 text-lg'>
                <p>TotalTask:{totalTask}</p>
                <p>CompletedTask:{completetdTask}</p>
                <p>RemainingTask:{remainingTask<0? 0: remainingTask}</p>
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