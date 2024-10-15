import React, { Component } from 'react';
import './home.css';
import slider_image1 from './images/slider-image_1.jpg';
import Latest from './latest';
import noise_buds_trans from './images/noise_buds_trans.png';
import noise_vs102 from './images/noise_vs102.png';
import noise_vs102pro from './images/noise_vs102pro.png';
import noise_bluds_102 from './images//noise_bluds_102.png';
import Banner from './banner';
import Footer from './footer';


export default class Home extends Component {

    constructor() {
        super()
        this.state = ({
            hd_products: true,
            ep_products: true,
            eb_products: true
        })
    }


    render() {

        const Latestproducts = [
            {
                id: 1,
                name: 'noise trans buds',
                img: noise_buds_trans,
                price: '1299/-',
                btn: 'Add to Cart'
            },
            {
                id: 2,
                name: 'noise vs102',
                img: noise_vs102,
                price: '1499/-',
                btn: 'Add to Cart'
            },
            {
                id: 3,
                name: 'noise v102 pro',
                img: noise_vs102pro,
                price: '1799/-',
                btn: 'Add to Cart'
            },
            {
                id: 4,
                name: 'noise bluds 104',
                img: noise_bluds_102,
                price: '999/-',
                btn: 'Add to Cart'
            }
        ]



        return (
            <>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-image" style={{ cursor: 'pointer' }}>
                                <img src={slider_image1} className=" px-4 d-block w-100 carousel-image" alt="..."  style={{ borderRadius: '40px' }} />
                                <div className="carousel-caption ">
                                    <h1>Immerse Yourself in Superior Sound</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* latest buttons */}


                <div className="container my-5 text-center ">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 style={{ fontWeight: "bold" }} >Latest Collection</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mx-5">
                                <div className="row">
                                    {
                                        Latestproducts.map((val, index) => {
                                            return (
                                                <div className="col-md-3" key={val.id}>
                                                    <Latest
                                                        id={val.id}
                                                        name={val.name}
                                                        img={val.img}
                                                        price={val.price}
                                                        btn={val.btn}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* banner  */}

                <Banner />

                {/* end of the banner  */}
                <br />
                <br />
                <br />


                {/* experience section   */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 style={{ fontWeight: "bold" }} >Experience</h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12" id='experience-div'>
                            <div className="time-div d-flex ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
                                </svg>
                                <h1 >Timely delivery</h1>
                            </div>
                            <div className="warranty-div d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                                </svg>
                                <h1 >One Year Warranty</h1>
                            </div>
                            <div className="secure_div d-flex" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                                </svg>
                                <h1>Secure Checkout</h1>
                            </div>
                        </div>
                    </div>
                </div>


                {/* about us  */}

                <br />

                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center py-5'> About Us</h1>
                            <ul style={{ listStyle: "none" }}>
                                <li><h3>Wireless Headphones</h3><br />
                                    <p>Leaf Wireless Headphones are our signature products for those who love to binge watch movies and tv shows. Deep bass, soft leather cushions and extra long battery life make these over ear headphones and on ear headphones a perfect buy to watch video content and listen to music too</p>
                                </li>
                                <li><h3>Wireless Headphones</h3><br />
                                    <p>Leaf Wireless Headphones are our signature products for those who love to binge watch movies and tv shows. Deep bass, soft leather cushions and extra long battery life make these over ear headphones and on ear headphones a perfect buy to watch video content and listen to music too</p>
                                </li>
                                <li><h3>Wireless Headphones</h3><br />
                                    <p>Leaf Wireless Headphones are our signature products for those who love to binge watch movies and tv shows. Deep bass, soft leather cushions and extra long battery life make these over ear headphones and on ear headphones a perfect buy to watch video content and listen to music too</p>
                                </li>
                                <li><h3>Wireless Headphones</h3><br />
                                    <p>Leaf Wireless Headphones are our signature products for those who love to binge watch movies and tv shows. Deep bass, soft leather cushions and extra long battery life make these over ear headphones and on ear headphones a perfect buy to watch video content and listen to music too</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* footer  */}

                <Footer />
            </>
        );
    }
}


