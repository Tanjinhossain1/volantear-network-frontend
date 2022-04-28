import React from 'react';
import auth from '../../firebase.init';
import headerLogo from '../../logos/Group 1329.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation()
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (googleLoading) {
        return (
            <div className='text-center mt-5'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden "></span>
                </Spinner>
            </div>
        )
    }
    console.log(user,googleUser)

    let from = location.state?.from?.pathname || "/";
    if (googleUser || user) {
        const url = 'http://localhost:5000/login';
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({email: user?.user?.email||googleUser?.user?.email})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            localStorage.setItem('accessToken',data.token)
            navigate(from)
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div className='text-center'>
                <div className='mt-5'>
                    <img width={200} src={headerLogo} alt="" />
                </div>
                <div className='mt-3 py-5 rounded-3 border w-50 mx-auto'>
                    <h2>Login With</h2>
                    <form onSubmit={handleSubmit}>
                        <input className='w-75 p-1' type="email" name="email" placeholder='Email' required id="" />
                        <input type="password" className='w-75 p-1 my-2' name='password' placeholder='PassWord' required />
                        <br />
                        <p>Don't Have An Account? <Link to='/signup'>Create Account</Link></p>
                        <input className='btn btn-primary px-5 py-2' type="submit" value="Login" />
                    </form>
                    {error && error?.message}
                    <p className='mt-2'>or</p>
                    <button onClick={() => signInWithGoogle()} className='bg-white rounded-pill '><img width={60} className='rounded-pill' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qTdJYKTM3vRqERc4i7KlOcQXUAkv2TVGmWEf8sAEvMwvUeVT02f8qSWRxQILcQ-IwgY&usqp=CAU" alt="" /><span className='mx-5'>Continue With Google</span></button>
                </div>

            </div>
        </div>
    );
};

export default Login;