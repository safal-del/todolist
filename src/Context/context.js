import { createContext, useState } from "react";
import { addItem, getItems, editItem ,deleteItem, CompletedTask, TotalTask, RemainingTask, } from "../localstorage.js"



export const contextApi = createContext();

function loadInitialUsers() {

  let users = getItems('todousers');
   console.log(users);
  if (users.length ===0) {
    let emptarray =[];
     
       localStorage.setItem("todousers", JSON.stringify(emptarray))
      
    
      
  }
  return users;
}
function RemainingTasks(){
  let totaltask = localStorage.getItem("totaltask");
   let parseTotaltask =  totaltask ?  totaltask:0 ;
   

    parseTotaltask= parseInt(parseTotaltask);
    console.log(parseTotaltask)
    
  let completedtask = localStorage.getItem("number");
     let parseCompletedTask = completedtask ?completedtask:0
   parseCompletedTask = parseInt(parseCompletedTask);
   
  let value = parseTotaltask - parseCompletedTask
    
    value = parseInt(value)

  RemainingTask("remaining", value);

  

   
   
  
   


  
}


const StateContext = ({ children }) => {
  RemainingTasks();
  const [users, setUsers] = useState(loadInitialUsers());
  const [editIndex, setIndex] = useState(0);


  function Adduser(data) {
    let users = addItem("todousers", data);
    setUsers(users)
     
  
  }
  


  function Editingindex(index) {
    setIndex(index);

  }

  function EditUser(i,data) {
    let users = editItem('todousers', i, data)
    setUsers(users);
  }
  function DeleteTaskCount(value){
    let num = localStorage.getItem("totaltask")
    num = num ? parseInt(num) :0
    let numvalue = localStorage.getItem("remaining")
    numvalue = numvalue? parseInt(numvalue) :0
   
  
   TotalTask("totaltask",num-value);
   RemainingTask("remaining" , numvalue-1 )
   CompletedTask("number",num-1);



  }


  function DeleteUser(id) {
    // console.log(id)
    // let filtereddata = users.filter((items) => {
    //   console.log(items.id)
    //   if (items.id !== id) {
    //     return items;
    //   }
    // });
    // console.log(filtereddata);
    let users = deleteItem("todousers",id)
    setUsers(users);
  }
  
  

  function CompletedTaskCounted(value){
    let num = localStorage.getItem("number")
      num = num ? parseInt(num) :0
     
    
     CompletedTask("number",value+num);
     
  }
  function TotalTasks(value){
    let num = localStorage.getItem("totaltask")
    num = num ? parseInt(num) :0
   
  
   TotalTask("totaltask",value+num);

  }
  


  const values = {
    users: users,
    // userData: userData,
   
    editIndex: editIndex,
    
    DeleteUser: DeleteUser,
   
    Adduser: Adduser,
    EditUser: EditUser,
    Editingindex: Editingindex,
    CompletedTaskCounted:CompletedTaskCounted,
    TotalTasks:TotalTasks,
    DeleteTaskCount:DeleteTaskCount,
   
    
  

  }

  return (<contextApi.Provider value={values}>
    {children}

  </contextApi.Provider>)




}
export default StateContext;