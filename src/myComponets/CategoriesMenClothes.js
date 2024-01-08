import React, { useContext, useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import Carousel from './Carousel';
// import Navbar from './Navbar';
import "../App.css";
import StateContext from "./StateContext";
const generateStars = (rating) => {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(
      // <i key={i} className="fa-solid fa-star">
      //   &nbsp;
      // </i>
      <i key={i} className="bi bi-star-fill">
        &nbsp;
      </i>
    );
  }
  return stars;
};
export default function CategoriesMenClothes(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Create an async function to use await
    const fetchData = async () => {
      try {
        // Fetch products when the component mounts
        const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
        const json = await response.json();

        // Store the products in state
        setProducts(json);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array to fetch data only once
  const { setCartValue } = useContext(StateContext);
  const { setCart } = useContext(StateContext);
  const { setPrice } = useContext(StateContext);

  const cartEntry = (product) => {
    setCartValue((prevCartValue) => prevCartValue + 1);
    setCart((prevCart) => [...prevCart, product]);
    setPrice((prevPrice) => prevPrice + product.price);
  };
  // const cartEntry = (product) => {
  //   setCart((prevCart) => (prevCart ? [...prevCart, product] : [product]));
  // };

  // useEffect(() => {
  //   const rating = product.rating.rate;
  //   for (let i = 0; i < rating; i++) {}
  // }, [products]);
  return (
    <>
      {/* <StateContext.Provider value={cart}> */}
      <div className="row my-4 container-fluid">
        {products.map((product) => (
          <div
            className="col-3 col-12 col-md-6 col-sm-12 col-lg-3 mb-3 d-flex justify-content-center align-content-center"
            key={product.id}
          >
            <div
              className="card"
              style={{ width: "25rem" }}
              data-id={product.id}
            >
              <img
                src={product.image}
                className="card-img-top card-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.trim()}</h5>
              </div>
              <div className="card-detail">
                <h4 className="text-decoration-none text-dark fw-bold">
                  $ {product.price}
                </h4>
                <h6 className="product-rating">
                  <span class="badge bg-danger ">
                    {generateStars(product.rating.rate)}
                    {/* {product.rating.rate}
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffffff", padding: "3px" }}
                    ></i> */}
                  </span>
                </h6>
              </div>
              <div className="card-bottom">
                {/* {props.children} */}
                <button
                  className="btncart fw-bold cart"
                  type="button"
                  id={`btn-${product.id}`}
                  onClick={() => cartEntry(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </StateContext.Provider> */}
    </>
  );
}