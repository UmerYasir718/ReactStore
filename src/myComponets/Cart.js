import React, { useContext } from "react";
import Navbar from "./Navbar";
import StateContext from "./StateContext";
export default function Cart() {
  const { cart } = useContext(StateContext);
  const { cartValue } = useContext(StateContext);
  const { price } = useContext(StateContext);
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-content-center">
        <table class="table">

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
        <h3 className="d-flex justify-content-center align-content-center">Total Price:&nbsp;${price}</h3>
      </div>
    </div>
  );
}
