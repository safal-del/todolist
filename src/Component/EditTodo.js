import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext,useState } from 'react'
import { contextApi } from '../Context/context'
import { editItem } from '../localstorage'

const EditTodo = (i) => {
    const navigate = useNavigate();
    const initialState = useContext(contextApi);
    const index = initialState.editIndex;
    console.log(index)
    const todolists = localStorage.getItem("todousers");


  const parsetodolist = JSON.parse(todolists);
   const user = parsetodolist.at(index).todo
        
    const DataEdit = initialState.EditUser
    const [todo, setTodo]= useState({
        todo:"",
        date:""
    })

     const handleOnChange=(e)=>{
        let date = new Date();
           
           
           
           
        let currentdate = date.getFullYear() +"/" +date.getMonth() +"/" +date.getHours() +"/" + date.getMinutes()
         setTodo({
            todo:e.target.value,
            date: currentdate
         })
        
         
     }

    const handleTodoSubmit =(e)=>{
        e.preventDefault();
        if(todo.todo.length>0){
            editItem("todousers",index,todo)
            navigate("/");
            window.location.reload();

        }
        else{
            console.log("this is not valid");
        }
      


    }

    
  return (
    <div>
        <div >
            <form onSubmit={handleTodoSubmit}>
                <label className='text-lg text-center'> Edit your task </label><br/>
                <input className='w-96 h-44 rounded bg-gray-100' type="text" name = "todo" id = "addtodo" placeholder={user} onChange={handleOnChange} /><br/>
                <button className=' mt-1 rounded bg-green-500 pt-1 pb-1 pl-2 pr-2'>Edit</button>
            </form>
        </div>

    </div>
  )
}

export default EditTodo