import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css';
import { sendEmailVerification } from 'firebase/auth';
import { ToastBody } from 'react-bootstrap';
import { Toast } from 'bootstrap';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home')

    }

    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
        Toast('successfully user created')

    }

    return (
        <div>
            <div className='register-form mb-5 text-center'>
                <h2 className='text-center my-4 text-primary'>Please Register</h2>

                <form onSubmit={handleRegister}>
                    <input className='w-50 my-1' type="text" name="Name" id="" placeholder='Enter Your Name' />
                    <br />
                    <input className='w-50 my-1' type="email" name="email" id="" placeholder='Email' required />
                    <br />
                    <input className='w-50 my-2' type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <input className='bg-primary text-white fw-bold rounded w-50 py-2' type="submit" value="Register" />
                </form>
                <p className='text-center'>Already Have an account? <Link to='/login' className='register-login' onClick={navigateLogin}>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;