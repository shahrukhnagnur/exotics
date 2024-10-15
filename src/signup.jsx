import React, { useState } from 'react';
import './loginpage.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');


    const handleredirect = () => {
        navigate('/loginpage')
    }

    const saveform = (e) => {
        e.preventDefault();
        
        if(password!==confirmpassword){
            alert("Passwords do not match")
        }
        console.log("Username:", username);
        console.log("Password:", password);

        setusername('');
        setpassword('');
        setconfirmpassword('');
    }

    return (
        <>
            <div className="container-fluid login-page-container">
                <div className="row">
                    <div className="col-md-12 align-item-center text-center ">
                        <form action="" onSubmit={(e) => saveform(e)}>
                            <div className="login-box">
                                <h1>Sign Up</h1>
                                <p>sign-Up into your account</p>
                                <div className="input-controls">
                                    <br />
                                    <input type="text " className='form-control' onChange={(e) => setusername(e.target.value)} value={username} placeholder='enter your name' />
                                    <br />
                                    <input type="password" className='form-control' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='enter your password' />
                                    <br />
                                    <input type="password" className='form-control' value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} placeholder='confirm your password' />
                                    <br />
                                    <button className='btn btn-danger w-100 h-50'>Sign-up</button>
                                </div>
                                <br />
                                <br />
                                <div className="registration">
                                    <p>Have an account</p>
                                    <p style={{ color: "blue", cursor: "pointer" }} onClick={handleredirect}>Login</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
