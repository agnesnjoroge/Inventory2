import './App.css';

import {useState,useEffect} from "react";

import SearchBar from "./SearchBar.js";
import ItemDispay from "./ItemDisplay.js";

import AddItem from "./AddItem.js";
function App() {

  const [filters,setFilters]=useState({});
  const [data,setData]=useState({items:[]});
  useEffect(()=>{
    fetch("http://localhost:8000/items")
    .then((response)=>response.json())
    .then((data)=>
      setData({items:data}));
         },[]);

  
  const UpdateFilters=(searchParams)=>{
    setFilters(searchParams);
  };
  const deleteItem=(item)=>{
    const items=data["items"];
    const requestOptions={
      method:"DELETE",
       };
     fetch(`http://localhost:8000/items/${item.id}`,requestOptions).then((response)=>{
         if(response.ok){
           const idx=items.indexOf(item);
           items.splice(idx,1);
           setData({items:items});
         }
       
     }
  );};


  const addItemToData=(item)=>{
    let items=data["items"];
    //item.id=items.length;
    const requestOptions={
      method:"POST",
      headers:{"Content-type":"application/json",
    },
    body:JSON.stringify(item),
    };
    fetch("http://localhost:8000/items",requestOptions).then((response)=>response.json()).then((data)=>{
      
      items.push(data);
      setData({items:items});
     console.log(data);
    
    }
    );
    
    
    
  };
// eslint-disable-next-line
  const filterData=(data)=>
  {
    const filteredData=[];
    if(!filters.name){
      return data;
    }
    for(const item of data){
      if(filters.name!=="" && item.name !==filters.name){
        continue;
      }
      if(filters.price!==0 && item.price  > filters.price){
        continue;
      }
      if(filters.type!=="" && item.type !==filters.type){
        continue;
      }
      if(filters.brand!=="" && item.brand !==filters.brand){
        continue;
      }
      
      filteredData.push(item);
      
    }
    return filteredData;
  };
   
return (
    <div className="container">
      
       <ItemDispay 
       deleteItem={deleteItem}
       items={filterData(data["items"])}/>
       <SearchBar UpdateSearchParams={UpdateFilters}/>
       <AddItem addItem={addItemToData}/>
        <p>{"name" in data?data["name"]:
      "No data to be found"}</p>

    </div>
  );
}


export default App;
    //react-scripts start
//json-server --watch database.json
/*"scripts": {   ...     "server": "json-server --watch db.json --port 8000"  }  ...*/
// npm init then npm run server