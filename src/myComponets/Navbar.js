import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import StateContext from "./StateContext";
export default function Home() {
  const [cate, setcate] = useState([]);
  const { cart, setCart } = useContext(StateContext);
  const categories = async () => {
    const category = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const response = await category.json();
    console.log(response);
    setcate(response);
  };
  useEffect(() => {
    categories();
  }, []);
  const value = useContext(StateContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark Navbar container fixed-top ">
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
                <NavLink
                  className="nav-link dropdown-toggle text-light fw-bold"
                  to="/Categories"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </NavLink>
                <ul
                  className="dropdown-menu  border border-light"
                  aria-labelledby="navbarDropdown"
                >
                  {cate.map((items) => (
                    <>
                      <li>
                        <Link className="dropdown-item text-dark" to="/">
                          {items.toUpperCase()}
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider text-dark" />
                      </li>
                    </>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-bold"
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Cart&nbsp;
                  <span className="badge bg-danger p-2 ">{cart}</span>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-search" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Cart Products
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Back to Store
              </button>
              <button type="button" class="btn btn-primary">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
