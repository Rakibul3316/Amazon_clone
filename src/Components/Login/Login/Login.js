import React, { useState } from 'react';
import './Login.css'
import logo from './amazon-logo.png'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../Firebase/FirebaseConfig';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }




    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src={logo}
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button
                        onClick={signIn}
                        type='submit'
                        className='login__singInBtn'
                    >Sing In
                    </button>
                </form>

                <p>By signing-in you agree to the Amazon Fake clone Conditons of use & Sale. Please see our Privacy Notice, Our cookies Notice and Our Interest-Based Ads Notice.</p>

                <p><b>If you don't hava an account. Please</b> <Link to='/createAccount'>Create an Account</Link></p>

                {/* <button onClick={register} className='login__registerBtn'>Create your Amazon Account</button> */}
            </div>
        </div>
    );
};

export default Login;