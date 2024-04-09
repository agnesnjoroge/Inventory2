import {useState} from "react";

function SearchBar(props){
  const[name,setName]=useState("");
  const[price,setPrice]=useState(0);
  const[type,setType]=useState("");
  const[brand,setBrand]=useState("");
  
 const SearchButtonPressed = ()=>
 {
props.UpdateSearchParams({
 // data:"Euphoria"
name:name, 
price:price, 
type:type, 
brand:brand
   
 });
setName("");
setBrand(0);
setType("");
setBrand("");
 

    //console.log(name);
    //console.log(price);
    //console.log(type);;
    //console.log(brand);
 };

 return(
      <div className="container">
       <h1>Search for an Item</h1>
       <form>
       <label htmlFor="name-field" className="label">Enter Name:</label>
       <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value) } className="input"/>
       
      <label htmlFor="price-field" className="label">Enter Max Price:</label>
       <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value) } className="input"/>
       
        <label htmlFor="type-field" className="label">Enter Type:</label>
       <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value) } className="input"/>
       
       <label htmlFor="brand-field" className="label">Enter Brand:</label>
       <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value) } className="input"/>
       <br/>
       <button type="button" onClick={SearchButtonPressed} className="btn">Search for an item</button>
       <br/>
    </form>
    
       
    </div>
  
   );
}


   
    
   

export default SearchBar;