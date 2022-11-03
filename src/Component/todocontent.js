import React, { useContext } from 'react'
import { contextApi } from '../Context/context';
import { useNavigate } from 'react-router-dom';
import { RemainingTask, UpdatedStatus } from '../localstorage';
import { deleteItem } from '../localstorage';

const Todocontent = () => {
  const navigate = useNavigate();
  const initialState = useContext(contextApi);
  const IndexEditing = initialState.Editingindex;
  const todolists = localStorage.getItem("todousers");
  const remainings = localStorage.getItem("remaining")
  const parsetodolist = JSON.parse(todolists);



  function CompletedTask(i){

     if(parsetodolist.length>0){
       parsetodolist.at(i).status = true;

       UpdatedStatus("todousers",parsetodolist);
       
       const remaining = localStorage.getItem("remaining");
       
        let parseremaining = remaining ? parseInt(remaining) :0;

       window.location.reload();
       
       RemainingTask("remaining",parseremaining+1);



     }




  }
  console.log(parsetodolist);


 //showed the total task
  const TotalTask = parsetodolist.length;
    

  function NavigateToEdit(index) {
    
    IndexEditing(index);
    navigate("/edit");
  
  }
  function DeleteAndCount(i){
    
    deleteItem("todousers",i);

    const remaining = localStorage.getItem("remaining");
       
    let parseremaining = remaining ? parseInt(remaining) :0;
    
    RemainingTask("remaining",parseremaining-1)
    
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
          <button className='rounded bg-red-500 p-1 hover:bg-red-700' onClick={() =>DeleteAndCount(i)}>delete</button>
            <button className='rounded bg-blue-500 p-1 hover:bg-green-600' onClick={() => NavigateToEdit(i)}>edit</button>
            <button onClick={()=>CompletedTask(i)} className='rounded bg-gray-500 p-1'> {items.status ? "complete":"done"}</button>
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
      <h2>TotalTask:{TotalTask}</h2>
      <h2>CompletedTask:{remainings}</h2>
      {TodoLoad()}
      {/* <button onClick={()=>deleteItem("todousers", 0)} >delete</button> */}
    </div>
  )
}

export default Todocontent