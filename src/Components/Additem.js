import React from "react";
import "./Additem.css";

const Additem = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      id: event.target.ID.value,
      Product_Name: event.target.Product_Name.value,
      selling_price: event.target.selling_price.value,
    };
    if (localStorage.getItem(obj.id)) {
      alert("id already exist");
    } else {
      props.data(obj);
      localStorage.setItem(obj.id, JSON.stringify(obj));
    }

    event.target.reset();
  };
  return (
    <>
      <form className="form-control" onSubmit={submitHandler}>
        <div className="input-container ">
          <label htmlFor="ID">ID</label>
          <input type="number" name="ID"></input>
        </div>
        <div className="input-container ">
          <label htmlFor="selling_price">Price</label>
          <input type="number" name="selling_price"></input>
        </div>
        <div className="input-container ">
          <label htmlFor="Product_Name">Product_Name</label>
          <input type="text" name="Product_Name"></input>
        </div>
        <button type="submit">ADD</button>
      </form>
    </>
  );
};
export default Additem;
