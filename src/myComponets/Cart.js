import React, { useContext, useEffect } from "react";
import Nav from "../mainComponets/Nav";
import StateContext from "./StateContext";
export default function Cart() {
  const { cart } = useContext(StateContext);
  //const { cartValue } = useContext(StateContext);
  const { price } = useContext(StateContext);
  useEffect(() => {
    // Add a class to the body tag when the component mounts
    document.body.classList.add("checkout-page");

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("checkout-page");
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <Nav />
      <div className="d-flex justify-content-center align-content-center mt-5">
        <table class="container table table-bordered">
          <thead>
            <tr>
              <th className="fs-3" scope="col">ID</th>
              <th className="fs-3" scope="col">Picture</th>
              <th className="fs-3" scope="col">Name</th>
              <th className="fs-3" scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr>
                <th scope="row">{product.id}</th>
                <td> <img
                  src={product.image}
                  className=""
                  alt="..."
                  style={{ width: "50px", height: "50px" }}
                /> &nbsp;</td>
                <td className="fw-bold">{product.title}</td>
                <td className="fw-bold fs-5">${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="totalPrice">
        Total Price:&nbsp;${price}
      </h3>
    </div>
  );
}
