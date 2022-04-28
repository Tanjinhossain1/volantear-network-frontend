import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const SignUp = () => {
    // const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
        
    const [updateProfile, updating] = useUpdateProfile(auth);
    console.log(user);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if ( user ) {
        // navigate(from)
    }
    // if(sending){
    //     toast('sending Verification')
    // }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data, event) => {
        const displayName = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirm;
        // console.log(displayName)
        
       
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            // await sendEmailVerification();
            await updateProfile({ displayName });
            event.target.reset();
            // toast('sent Email Verification');
        }
    };
    return (
        <div className=''>
            <form className='w-50 mx-auto mt-5 border p-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 mb-2 p-1' placeholder='FullName' defaultValue="" {...register("name")} />
                <br />
                <input className='w-100 mb-2 p-1' type='email' placeholder='Email' {...register("email", { required: true })} />
                <br />
                <input className='w-100 mb-2 p-1' type='password' placeholder='Password' {...register("password", { required: true })} />
                <br />
                <input className='w-100 mb-2 p-1' type='password' placeholder='ConfirmPassword' {...register("confirm", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <p>Already Have An Account? <Link to='/login'>Login</Link></p>
                <div className='w-25 mx-auto'>
                    <input className='w-100 mt-2 btn btn-primary' type="submit" value='Sign Up' />
                </div>
            </form>
        </div>
    );
};

export default SignUp;