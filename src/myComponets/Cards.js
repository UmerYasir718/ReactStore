import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Carousel from './Carousel';
// import Navbar from './Navbar';
import '../App.css'
export default function Cards({ addToCart }) {
    // Use state to store the fetched products
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState()
    // let i = 0;
    useEffect(() => {
        // Fetch products when the component mounts
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((json) => {
                // Store the products in state
                setProducts(json);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []); // Empty dependency array to fetch data only once
  const cartEntry = async () =>{
    i++
    // setCart(i);
    addToCart();
  }
    return (
        <>
            <div className="row my-4 container-fluid">
                {products.map((product) => (
                    <div
                        className="col-3 col-12 col-md-6 col-sm-12 col-lg-3 mb-3 d-flex justify-content-center align-content-center"
                        key={product.id}
                    >
                        <div className="card" style={{ width: '25rem' }} data-id={product.id}>
                            <img src={product.image} className="card-img-top card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title.trim()}</h5>
                            </div>
                            <div className="card-detail">
                                <h4 className="text-decoration-none text-dark fw-bold">
                                    $ {product.price}
                                </h4>
                                <h6 className="product-rating">
                                    <span class="badge bg-danger ">
                                        {product.rating.rate}
                                        <i class="fa-solid fa-star" style={{ color: "#ffffff", padding:"3px"}}></i>
                                    </span>
                                </h6>
                            </div>
                            <div className="card-bottom">
                                <button className="btncart  fw-bold cart"
                                    type="button"
                                    id={`btn-${product.id}`} onClick={cartEntry} >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    );
}
