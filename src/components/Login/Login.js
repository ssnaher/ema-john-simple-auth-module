import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    return (
        <div className="login-form">
            <div >
                <h2>Log In</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>

                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <div>---------or---------</div>
                <button
                    onClick={signInUsingGoogle} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;