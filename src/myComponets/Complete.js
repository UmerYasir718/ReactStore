import React, { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
import Carousel from "./Carousel";
import Footer from "./Footer";
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
            className="bi bi-arrow-up-square-fill text-light bg-danger scroll-to-top-button fs-2 p-2 rounded fw-bold  "
            onClick={scrollToTop}
          >
            <span className="badge bg-danger p-2 fw-medium fst-normal">
              {cartValue}
            </span>
          </i>
        )}
      </div>
    </div>
  );
}
