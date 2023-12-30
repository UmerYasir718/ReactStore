import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import logo from "../logo.svg";
import StateContext from "./StateContext";
export default function Home() {
  const [cate, setCate] = useState([]);
  const { cart } = useContext(StateContext);
  const { cartValue } = useContext(StateContext);
  const { price } = useContext(StateContext);
  const categories = async () => {
    const category = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const response = await category.json();
    console.log(response);
    setCate(response);
  };
  useEffect(() => {
    categories();
  }, []);
  // const value = useContext(StateContext);
  return (
    <div>
      <div className="bg-img">
        <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong Navbar fixed-top">
          <div className="container-fluid">
            <img src={logo} className="App-logo Icon" alt="logo" />
            <Link className="navbar-brand text-light fw-bold fs-1" to="/">
              ReactStore
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-light fw-bold"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light fw-bold" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light fw-bold"
                    // to="/Categories"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul
                    className="dropdown-menu  border border-light"
                    aria-labelledby="navbarDropdown"
                  >
                    {cate.map((items) => (
                      <>
                        <li>
                          <Link className="dropdown-item text-light">
                            {items.toUpperCase()}
                          </Link>
                        </li>
                        <li>
                          <hr className="border border-light border-1 opacity-100" />
                        </li>
                      </>
                    ))}
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light  me-2" type="submit">
                  Search
                </button>
              </form>

              <div className="nav-item bg-dark p-2 rounded">
                <Link
                  className="nav-link text-light fw-bold d-flex justify-content-center align-content-center"
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Cart&nbsp;
                  <span className="badge bg-danger p-2 ">{cartValue}</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
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
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                <Link to="/checkOut" className="text-decoration-none text-light">
                  Check Out
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
