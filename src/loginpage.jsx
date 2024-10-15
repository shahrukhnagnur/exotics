import React from 'react';
import './loginpage.css'
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {

    const navigate=useNavigate()

    const handleredirect=()=>{
        navigate('/signup')
    }
    return (
        <>
            <div className="container-fluid login-page-container">
                <div className="row">
                    <div className="col-md-12 align-item-center text-center ">
                        <div className="login-box">
                            <h1>Login</h1>
                            <p>sign into your account</p>
                            <div className="input-controls">
                            <br />
                                <input type="text " className='form-control' placeholder='enter your name' />
                                <br />
                                <input type="password" className='form-control' placeholder='enter your password' />
                                <br />
                                <a href="" className='forgot-pass'>Forgot Password</a>
                                <br />
                                <button className='btn btn-danger w-100 h-50'>Login</button>
                            </div>
                            <br />
                            <br />
                            <div className="registration">
                                <p>Don't have an account?</p>
                                <p style={{color:"blue",cursor:"pointer"}} onClick={handleredirect}>Register Here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginpage;
