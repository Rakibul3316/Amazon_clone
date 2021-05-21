import React, { useState } from 'react';
import './CreateAccount.css'
import logo from './amazon-logo.png'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../Firebase/FirebaseConfig';

const CreateAccount = () => {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')



    const register = (e) => {
        e.preventDefault();

        // Creat User data and Validation
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email.match(mailformat)) {
            alert("Enter valid email")
        }

        if (password1.length < 6) {
            alert("Password must be contain more than 5 character")
        }

        if (password1 !== password2) {
            alert("Password don't match")
        }

        const newUser = {
            email: email,
            password: password1
        }

        alert("Create Account Successfully")
        console.log(newUser)

        // Create User by firebase

        auth
            .createUserWithEmailAndPassword(email, password1)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='createAccount'>
            <Link to='/'>
                <img
                    className='createAccount__logo'
                    src={logo}
                    alt=""
                />
            </Link>

            <div className="createAccount__container">
                <h1>Create New Account</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password1} onChange={e => setPassword1(e.target.value)} />

                    <h5>Confirm Password</h5>
                    <input type="password" value={password2} onChange={e => setPassword2(e.target.value)} />

                    <button type='submit' onClick={register} className='registerBtn'>Create your Amazon Account</button>
                </form>


            </div>
        </div>
    );
};

export default CreateAccount;