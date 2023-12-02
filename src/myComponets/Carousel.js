import React from 'react'
// import Navbar from './Navbar'
// import logo from '../logo.svg'
import '../App.css';
export default function Carousel() {
    return (
        <div>
            <div className='container-fluid'>
                <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../1.png" class="d-block w-100 sliderImg" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="../2.png" class="d-block w-100 sliderImg" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="../3.png" class="d-block w-100 sliderImg" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="alert color my-2 container" role="alert">
                Check Out the Lastest Products on best Prices
            </div>
        </div>
    )
}
