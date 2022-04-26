import React from 'react';
import auth from '../../firebase.init';
import headerLogo from '../../logos/Group 1329.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        return (
        <div className='text-center mt-5'>
                <Spinner animation="border"  role="status">
                <span className="visually-hidden "></span>
            </Spinner>
        </div>
        )
    }

    return (
        <div>
            <div className='text-center'>
                <div className='mt-5'>
                    <img width={200} src={headerLogo} alt="" />
                </div>
                <div className='mt-5 py-5 rounded-3 border w-50 mx-auto'>
                    {error&& error?.message}
                    <h2>Login With</h2>
                    <button onClick={() => signInWithGoogle()} className='bg-white rounded-pill mt-3'><img width={60} className='rounded-pill' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qTdJYKTM3vRqERc4i7KlOcQXUAkv2TVGmWEf8sAEvMwvUeVT02f8qSWRxQILcQ-IwgY&usqp=CAU" alt="" /><span className='mx-5'>Continue With Google</span></button>
                </div>

            </div>
        </div>
    );
};

export default Login;