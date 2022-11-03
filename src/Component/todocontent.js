import React, { useContext } from 'react'
import { contextApi } from '../Context/context';
import { useNavigate } from 'react-router-dom';

const Todocontent = () => {
  const navigate = useNavigate();
  const initialState = useContext(contextApi);
  const IndexEditing = initialState.Editingindex;
  const UserDelete = initialState.DeleteUser;
  const DeleteTaskCounts = initialState.DeleteTaskCount;
  const TaskCount = initialState.CompletedTaskCounted;
  const todolists = localStorage.getItem("todousers");


  const parsetodolist = JSON.parse(todolists);

  function NavigateToEdit(index) {
    IndexEditing(index);
    navigate("/edit");
  
  }
  function DeleteAndCount(i,data){
    UserDelete(i);
    DeleteTaskCounts(data)
    window.location.reload()

  }

  function CompletedTaskCounteds(value){
    TaskCount(value)
    window.location.reload()
  

  }


  function TodoLoad() {

  if (parsetodolist.length > 0) {

      let tododata = parsetodolist.map((items, i) => {
        return (
          <div className=' h-48 w-96 bg-[#FAC585] rounded-lg mt-7 p-4 flex flex-col justify-between break-words h-max '>
            <p>date:{items.date}</p>
            <h3 className='text-xl'>task:{items.todo}</h3>
            
          <div className='mt-3 flex justify-around text-white  '>
          <button className='rounded bg-red-500 p-1 hover:bg-red-700' onClick={() =>DeleteAndCount(i,1)}>delete</button>
            <button className='rounded bg-blue-500 p-1 hover:bg-green-600' onClick={() => NavigateToEdit(i)}>edit</button>
            <button onClick={()=>CompletedTaskCounteds(1)} className='rounded bg-gray-500 p-1'>done</button>
          </div>

          </div>
        )
      })
      return tododata;

    }
    else {
    
      
      return (<p className='text-3xl'>nothing added in todo</p>)
       
    }
  }



  return (
    <div>
      {TodoLoad()}
      {/* <button onClick={()=>deleteItem("todousers", 0)} >delete</button> */}
    </div>
  )
}

export default Todocontent