
export function getItems(key){

     let items = localStorage.getItem(key)
    items = items ?  JSON.parse(items): [];
    //   localStorage.setItem(key, JSON.stringify(items));
      return items;


}
export function addItem(key, data) {
    let initialData = localStorage.getItem(key);
   let formattedData = initialData ? JSON.parse(initialData) : [];
    formattedData.push(data);
    localStorage.setItem(key, JSON.stringify(formattedData));
    return formattedData;
  }

  export function editItem(key, index, data) {
    let initialData = localStorage.getItem(key);
    let formattedData = initialData ? JSON.parse(initialData) : [];
    formattedData.splice(index, 1, data);
    localStorage.setItem(key, JSON.stringify(formattedData));
    return formattedData;
  }

  export function deleteItem (key, index){
    let initialData = localStorage.getItem(key);
    let formattedData = initialData ? JSON.parse(initialData) : [];
    formattedData.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(formattedData));
    return formattedData;
     
  }

  export function CompletedTask(key, value){
   
    //  let data =  localStorage.getItem(key);
    //  let parseddata = data ? parseInt(value) : 0;
       localStorage.setItem(key, JSON.stringify(value));
       
      
    
  
      
      
       
      
    }
    export function TotalTask(key, value){
   
      //  let data =  localStorage.getItem(key);
      //  let parseddata = data ? parseInt(value) : 0;
         localStorage.setItem(key, JSON.stringify(value));
         
        
      
    
        
        
         
        
      }
      export function RemainingTask(key, value){

   
       
           localStorage.setItem(key, JSON.stringify(value));

           
          
        
      
          
          
           
          
        }
    