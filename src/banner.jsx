import React from "react";
import './banner.css';
import first_img from './images/first_slide.png';
import second_img from './images/second-slide.png';
import third_img from './images/third-slide.png';

export default function Banner() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide custom-carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{backgroundColor:"rgb(219,141,167)"}}>
                    <div className="carousel-item active custom-carousel-item">
                        <div className="carousel-content">
                            <div className="carousel-caption">
                                <h3>Spectacular Designs</h3>
                                <p>Designs are so impressive that you cant resist.</p>
                            </div>
                            <img src={first_img} className="d-block custom-img" alt="..."  height={600}/>
                        </div>
                    </div>
                    <div className="carousel-item custom-carousel-item" style={{backgroundColor:"rgb(189,133,121)"}}>
                        <div className="carousel-content">
                            <div className="carousel-caption">
                                <h3>Noise Cancellation</h3>
                                <p>Hear the sound not the noise.</p>
                            </div>
                            <img src={second_img} className="d-block custom-img" alt="..." height={600}/>
                        </div>
                    </div>
                    <div className="carousel-item custom-carousel-item" style={{backgroundColor:"rgb(119,132,159)"}}>
                        <div className="carousel-content">
                            <div className="carousel-caption">
                                <h3>Premium Colors</h3>
                                <p>Choose from a variety of Colors.</p>
                            </div>
                            <img src={third_img} className="d-block custom-img" alt="..." height={600} />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
