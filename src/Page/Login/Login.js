import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';


const Login = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let from = useLocation.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user2,
        loading2,
        error2,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (user1 || user2) {
        navigate(from, { replace: true });
    }

    const handleLoginPageSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    const handlegoogleSignIn = () => {
        signInWithGoogle();
    }

    const navigateLogin = () => {
        navigate('/register')
    }
    return (
        <div>
            <div className='container w-50 border  p-3 mx-auto'>
                <h2 className='text-center text-primary my-5'>Please Login</h2>
                <Form onSubmit={handleLoginPageSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New to Car Solution? <span className='register text-danger' onClick={navigateLogin} >Register</span></p>

                <br />
                <p className='text-center'>-------------OR-----------------</p>
                <button className='btn btn-info' onClick={handlegoogleSignIn}>Google Sign IN</button>
            </div>


        </div>
    );
};

export default Login;