import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import logo from "../logo.svg";
import StateContext from "../myComponets/StateContext";
export default function Nav() {
  const [cate, setCate] = useState([]);
  // const { cart } = useContext(StateContext);
  const { cartValue } = useContext(StateContext);

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
  return (
    <div>
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
            <form className="d-flex justify-content-center align-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-light me-2" type="submit">
                Search
              </button>
            </form>

            <div className="nav-item bg-light p-2 rounded  mt-sm-2 ">
              <Link
                className="nav-link text-dark fw-bold d-flex justify-content-center align-content-center"
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
  );
}
