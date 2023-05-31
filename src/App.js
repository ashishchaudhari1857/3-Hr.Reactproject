import React, {useState} from "react";
import "./App.css";
import Additem from "./Components/Additem";
import Display from "./Components/Display";

 const  App= () =>{
  const [product ,setproduct]=useState('')
  const [Grandtotal, setGrandtotal]=useState(0);
  const data=(newobj)=>{    
        setproduct((prevproduct)=>[...prevproduct ,newobj]);
  }
 console.log(product)
 const removeHandler = (id) => {
  const updatedProduct = product.filter((item) => item.id !== id);
  setproduct(updatedProduct); 
  localStorage.removeItem(id)
};

  return (
    <>
    <Additem data={data}></Additem>
    <Display info={product} remove={removeHandler}></Display>
    </>
  );
}

export default App;
