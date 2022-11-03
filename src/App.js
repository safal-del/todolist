import { Route,Routes } from 'react-router-dom';
import EditTodo from './Component/EditTodo';
import Homepage from './Component/Homepage';





function App() {

  let items = localStorage.getItem("todousers");
  console.log(items);
  return (
    
    <div className='h-[100vh]'>

       <div className='flex justify-center'>    
        <div className='   flex justify-center w-[80%]'>
        <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path = "/edit" element={<EditTodo/>}/>
     </Routes>
        </div>
     </div>

      
      

        
     
    </div>
  );
}

export default App;
