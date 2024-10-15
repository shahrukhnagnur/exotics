import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    const navigate = useNavigate();

    const handleredirect = () => {
        navigate(`/loginpage`);
    }

    const goto=()=>{
        navigate('/cart');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg px-5">
                <NavLink to="/" className="navbar-brand text-black" style={{ fontFamily: "europa", fontSize: "64px" }}><h1>EXOTICS</h1></NavLink>
                <ul className="navbar-nav m-auto">
                    <li className="nav-item mx-4">
                        <NavLink to="/home" className="nav-link text-black">Home</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                        <NavLink to="/headphone" className="nav-link text-black">Headphone</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                        <NavLink to="/earbuds" className="nav-link text-black">Earbuds</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                        <NavLink to="/neckbands" className="nav-link text-black">Neckbands</NavLink>
                    </li>
                </ul>
                <div className="cart d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4" style={{ textDecoration: 'none', position: 'relative',cursor:"pointer" }}  onClick={goto}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-cart2" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg>
                        </li>
                        <li className='nav-item mx-4' style={{ textDecoration: 'none', cursor: "pointer" }} onClick={handleredirect}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Navbar;