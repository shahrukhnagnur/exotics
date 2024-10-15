import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './products.css';
import boat_rockerz_pro from './images/boat_rockerz_150_pro.webp';
import noise_buds_trans from './images/noise_buds_trans.png';
import noise_vs102 from './images/noise_vs102.png';
import noise_vs102pro from './images/noise_vs102pro.png';
import noise_bluds_102 from './images/noise_bluds_102.png';
import buds_trance from './images/buds_trance.webp';
import air_buds_plus from './images/air_buds_plus.webp';
import noise_verve_2 from './images/verve_2.jpeg';
import buds_x_prime from './images/buds_x_prime.webp';
import hammer_aero_max from './images/hammer_aero_max.webp';
import hammer_duopods from './images/hammer_duopods.webp';
import oneplus_nord_3 from './images/oneplus_nord_3.webp';

const products = [
    { id: 1, name: 'Noise Trans Buds', img: noise_buds_trans, description: 'Wireless noise-cancelling earbuds with powerful sound and long-lasting battery life.', price: '1299/-' },
    { id: 2, name: 'Noise VS102', img: noise_bluds_102, description: 'True wireless earbuds with a compact design, powerful bass, and IPX5 water resistance.', price: '1499/-' },
    { id: 3, name: 'Noise V102 Pro', img: noise_vs102pro, description: 'Pro-grade wireless earbuds with active noise cancellation and high-definition sound.', price: '1799/-' },
    { id: 4, name: 'Noise Buds 104', img: noise_vs102, description: 'Budget-friendly earbuds with crisp sound and a sleek, lightweight design.', price: '999/-' },
    { id: 5, name: 'Noise Trance Buds', img: buds_trance, description: 'Budget-friendly and compact with a sleek design for a better fit.', price: '999/-' },
    { id: 6, name: 'Noise Air Buds +', img: air_buds_plus, description: 'Dual Pairing, Quad Mic ENC, Low Latency, Up to 60-hour Playtime, 12mm Driver', price: '1699/-' },
    { id: 7, name: 'Noise Verve 2', img: noise_verve_2, description: 'Compact design with premium sound quality.', price: '1299/-' },
    { id: 8, name: 'Noise Buds X Prime', img: buds_x_prime, description: '', price: '1099/-' },
    { id: 9, name: 'Hammer Duopods', img: hammer_duopods, description: 'With an impressive 100 hrs of standby time, you can rely on these wireless TWS to be ready whenever you need them.', price: '699/-' },
    { id: 10, name: 'Hammer Aero Max', img: hammer_aero_max, description: 'Hammer Aero Max ANC & ENC in-ear Bluetooth earbuds with slide and touch controls.', price: '1499/-' },
    { id: 11, name: 'OnePlus Nord 3', img: oneplus_nord_3, description: 'The buds come with 12.4 mm Titanized Diaphragm Drivers for a deeper bass and clear treble, offering an immersive sound experience.', price: '2299/-' },
    { id: 21, name: 'boat rockerz 150 pro ', img: boat_rockerz_pro, price: '999/-', btn: 'Add to Cart' }
];

function Products() {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    if (!product) {
        return <div>Product not found</div>;
    }


    return (
        <div className="container my-5 py-5" id="image-container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={product.img} className="d-block product_image" alt={product.name} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="image-content">
                        <h5 className="fw-light">Exotics collection</h5>
                        <h1 className="fw-bold">{product.name}</h1>
                        <p className="fw-light">{product.description}</p>
                        <div className="price d-flex align-items-center">
                            <p className="fw-bold" style={{ fontSize: '30px' }}>{product.price}</p>
                            <div className="discount ms-3">
                                <p className="text-muted" style={{ fontSize: '20px' }}>50%</p>
                            </div>
                        </div>

                        {/* Quantity Control */}
                        <div className="row">
                            <div className="col-md-3 d-flex">
                                <div className="button d-flex" style={{ gap: "20px", marginTop: "15px" }}>
                                    <div className="plus" onClick={incrementQuantity} style={{ cursor: "pointer" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                        </svg>
                                    </div>
                                    <div className="value fw-bold">
                                        <p>{quantity}</p>
                                    </div>
                                    <div className="minus" onClick={decrementQuantity} style={{ cursor: "pointer" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="add-to-cart fw-bold d-flex">
                                    <div className="main-cart d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <p style={{ marginTop: "13px", marginLeft: "10px",cursor:"pointer" }}>ADD TO CART</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
