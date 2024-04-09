import {useState} from "react";


function AddItem(props){
  const[name,setName]=useState("");
  const[price,setPrice]=useState(0);
  const[type,setType]=useState("");
  const[brand,setBrand]=useState("");
  
  const AddItemButtonPressed = ()=>
    {props.addItem({
  
    name:name, 
    price:price, 
    type:type, 
    brand:brand
     });
    setName("");
    setBrand(0);
    setType("");
    setBrand("");
     };

 
 
 
    
    return(
      <div className="container">
     
      
       <h2 className="text">Add an Item</h2>
       <form>
       <label htmlFor="name-field" className="label">Enter Name:</label>
       <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value) } className="input"/>
       <br/>
      <label htmlFor="price-field" className="label">Enter Price:</label>
       <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value) } className="input"/>
        <br/>
              

        <label htmlFor="type-field" className="label">Enter Type:</label>
       <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value) } className="input"/>
       <br/>
       <label htmlFor="brand-field" className="label">Enter Brand:</label>
       <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value) } className="input"/>
       <br/>
       
       <button type="button" onClick={AddItemButtonPressed} className="btn">Add an item</button>
       <br/>
        
    </form>
    
   {/* <p>Name:{name}</p>
    <p>Price:{price}</p>
    <p>Type:{type}</p>
    <p>Brand:{brand}</p>
    */}
    

   </div>
   );
}
           // <p>Entries:{"name" in name //?name[name]:"No data to //display"}</p>

   
    
   

export default AddItem;