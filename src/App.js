import { Route,Routes } from 'react-router-dom';
import EditTodo from './Component/EditTodo';
import Homepage from './Component/Homepage';
import { useState } from 'react';
import { getItems } from './localstorage';

function loadInitialUsers() {

  let users = getItems('todousers');
   console.log(users);
  if (users.length === 0) {
    let emptarray =[];
     
       localStorage.setItem("todousers", JSON.stringify(emptarray))
      
    
      
  }
  return users;
}



function App() {
  loadInitialUsers();

 
   const [index,setIndex]= useState(0);

    function PassIndex(data){
      setIndex(data)

   }
  return (
    
    <div className='h-[100vh]'>

       <div className='flex justify-center'>    
        <div className='   flex justify-center w-[80%]'>
        <Routes>
      <Route path='/' element={<Homepage  func={PassIndex}/>}/>
      <Route path = "/edit" element={<EditTodo index ={index}/>}/>
     </Routes>
        </div>
     </div>

      
      

        
     
    </div>
  );
}

export default App;
