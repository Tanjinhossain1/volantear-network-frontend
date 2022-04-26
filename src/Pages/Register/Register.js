import React from 'react';
import headerLogo from '../../logos/Group 1329.png'

const Register = () => {
    return (
        <div className='text-center'>
            <div>
                <img width={200} src={headerLogo} alt="" />
            </div>
            <div>
                <div className='border py-4 mt-3 w-50 mx-auto'>
                    <h3 className='mb-5'>Register As a Volunteer</h3>
                    <div className=''>
                        <form className='d-flex mx-auto w-50 flex-column'>
                            <input className='mt-2 p-1 ' type="text" placeholder='Full Name' name='name'/>
                            <input className='mt-2 p-1 ' type="email" name="email" id="" placeholder='Email' />
                            <input className='mt-2 p-1 ' type="date" name="date" id="" />
                            <input className='mt-2 p-1 ' type='text' name="description" placeholder='Description' id=""></input>
                            <input className='mt-2 p-1 ' type="text" placeholder='Organized Books At The Library' />
                            <input className='mt-2 py-2 text-white bg-primary border-0' type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;