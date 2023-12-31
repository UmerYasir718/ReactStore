import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Nav from "../mainComponets/Nav";
import StateContext from "./StateContext";
export default function Home() {
  //const [cate, setCate] = useState([]);
  const { cart } = useContext(StateContext);
  // const { cartValue } = useContext(StateContext);
  const { price } = useContext(StateContext);
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div>
      <div className="bg-img">
        <Nav />
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart Products
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" >
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
                  {/* <tr>
                    <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                    <td>Total Price:{price}</td>
                  </tr> */}
                </tbody>
              </table>
              <h3 className="d-flex justify-content-center align-content-center">Total Price:&nbsp;${price}</h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Back to Store
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => navigate("/checkOut")}>
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
