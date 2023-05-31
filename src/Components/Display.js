import React from "react";
const Display = (props) => {
  if (!props.info) {
    return null; // or return a fallback UI if desired
  }

  const ourdata = props.info.map((data, i) => {
    if (data.id) {
      return (
        <>
          <ul>
            <li key={data.id}>
              ID: {data.id} Name: {data.Product_Name} Selling Price:{" "}
              {data.selling_price}
              <button onClick={() => props.remove(data.id)}>Delete</button>
            </li>
          </ul>
        </>
      );
    }
  });
  console.log(ourdata);
  return <>{ourdata}</>;
};
export default Display;
