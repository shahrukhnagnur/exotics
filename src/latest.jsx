import React from 'react';
import './latest.css';
import { useNavigate } from 'react-router-dom';

export default function Latest({ id, name, img, price, btn }) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        console.log("Navigating to product:", id); 
        navigate(`/products/${id}`);
    };

    return (
        <>
            <div className="card my-5 latest-card" style={{ width: '19rem' }}>
                <div className="image-wrapper">
                    <img src={img} className="card-img-top latest-img" alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title latest-title" style={{ fontWeight: "bold" }}>{name}</h5>
                    <p className="card-text latest-price">Price: {price}</p>
                    <button className="btn latest-btn" onClick={handleRedirect}>
                        {btn}
                    </button>
                </div>
            </div>
        </>
    );
}
