import React, {useState} from "react";
import "./App.css";
import Additem from "./Components/Additem";
import Display from "./Components/Display";

 const  App= () =>{
  const [obj, setObj] = useState(null);
  const data=(newobj)=>{
        setObj(newobj)
  }
 
  return (
    <>
    <Additem data={data}></Additem>
    <Display info={obj}></Display>
    </>
  );
}

export default App;
