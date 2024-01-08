import React, { useContext, useEffect, useState } from "react";
import Footer from "../mainComponets/Footer";
import Cards from "./Cards";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import StateContext from "./StateContext";
export default function Complete() {
  const { cartValue } = useContext(StateContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // You can adjust the scroll threshold as needed
    const scrollThreshold = 150;

    setIsVisible(scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Carousel />
      <Cards />
      <Footer />
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        {isVisible && (
          <i
            className="bi bi-arrow-up-square-fill scroll-to-top-button "
            onClick={scrollToTop}
          >
            <span className="badge  cartValueScroll-to-top-button">
              {cartValue}
            </span>
          </i>
        )}
      </div>
    </div>
  );
}
