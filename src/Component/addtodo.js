import React, { useState } from 'react'

import { useContext } from 'react'
import { contextApi } from '../Context/context'
import { addItem } from '../localstorage';

const Addtodo = () => {
    const initialState = useContext(contextApi);
     const UserAdd = initialState.Adduser;
     console.log(UserAdd);
    const [todo, setTodo]= useState({
        todo:"",
        date:"",
        status:null
    })
  const [inputState, setInputState]= useState(false)

     const handleOnChange=(e)=>{
         let date = new Date();
           
           
           
           
           let currentdate = date.getFullYear() +"/" +date.getMonth() +"/" +date.getHours() +"/" + date.getMinutes()
         setTodo({
            todo:e.target.value,
            date:currentdate,
            status:false
         })
        
         
     }
     

    const handleTodoSubmit =(e)=>{
        e.preventDefault();
        if(todo.todo.length>0){
            addItem("todousers", todo)
             todo.todo = "";
             setInputState(false)
             window.location.reload();
             

        }
        else{
            console.log("you need to write something")
        }
       


    }

    

    
  return (
    <div>
        <div>
            
              
               
                <button className='rounded bg-green-600 w-96 h-10 text-white mt-5' onClick={()=>setInputState(!inputState)}>addtodo</button><br/>
                {inputState ? <div><input className='w-96 h-44 rounded bg-gray-100 z-10 absolute' type="text" name = "todo" id = "addtodo" onChange={handleOnChange} />
                  <button className='bg-rounded-lg bg-green-500 p-2 text-white z-20 absolute mt-28 ml-64' onClick={(e)=>{handleTodoSubmit(e)}}>add</button>
                </div>:null}
            
        </div>

    </div>
  )
}

export default Addtodo