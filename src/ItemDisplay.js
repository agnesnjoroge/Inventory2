function ItemDisplay({items,deleteItem}){
 const showItem=(item)=>{
   return(
     
   
     <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.type}</td>
      <td>{item.brand}</td>
      <td><button className="btn" onClick={()=>deleteItem(item) }>Delete</button></td>
    </tr>
    
     );
 };

  
  return(
   <div className="table"> 
     
        <h2>Items</h2>
     
      
      <table className="table table-stripped">
      <thead>
      <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Type</th>
      <th scope="col">Brand</th>
      <th scope="col">Delete</th>
      </tr>
      </thead>
      <tbody>{items.map(showItem)}</tbody>
      </table>
      
      </div>
   
    );
}
export default ItemDisplay;