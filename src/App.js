import React, {useState} from "react";
import "./App.css";
import Additem from "./Components/Additem";
import Display from "./Components/Display";

 const  App= () =>{
  const [product ,setproduct]=useState('')
  const [Grandtotal, setGrandtotal]=useState(0);
  const data=(newobj)=>{ 
    setGrandtotal((prevGrandtotal) => prevGrandtotal + Number(newobj.selling_price));  
        setproduct((prevproduct)=>[...prevproduct ,newobj]);
  }
 console.log(product)
 const removeHandler = (id,selling_price) => {
  const updatedProduct = product.filter((item) => item.id !== id);
  setproduct(updatedProduct); 
  setGrandtotal((prevGrandtotal) => prevGrandtotal - Number(selling_price));  
  localStorage.removeItem(id)
};
console.log(Grandtotal)
  return (
    <>
    <Additem data={data}></Additem>
    <Display info={product} remove={removeHandler}></Display>
    <h1>the total worth of product is {Grandtotal}</h1>
    </>
  );
}

export default App;
