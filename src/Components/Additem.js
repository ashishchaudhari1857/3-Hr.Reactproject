import React from "react";

const Additem=(props)=>{
   const submitHandler=(event)=>{
    event.preventDefault();
    const obj={
        id:event.target.ID.value,
        Product_Name:event.target.Product_Name.value,
        selling_price:event.target.selling_price.value
    }
    localStorage.setItem(obj.id ,JSON.stringify(obj)); 
   
    props.data(obj);
    event.target.reset();
    
   }
    return(
        <>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="ID">ID</label>
                <input type="number" name="ID"></input>
            </div>
            <div>
                <label htmlFor="selling_price">Price</label>
                <input type="number" name="selling_price"></input>
            </div>
            <div>
                <label htmlFor="Product_Name">Product_Name</label>
                <input type="text" name="Product_Name"></input>
            </div>
        <button type="submit">ADD</button>
        </form>
        </>
    );
}
export default Additem;