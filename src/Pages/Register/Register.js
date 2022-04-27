import React, { useState } from 'react';
import headerLogo from '../../logos/Group 1329.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const Register = () => {
    const { id } = useParams();
    const [volunteerCheck, setVolunteerCheck] = useState({});

    if(volunteerCheck._id !==undefined){
    if(volunteerCheck._id===id){
        console.log('ok done')
        delete volunteerCheck._id
        if (volunteerCheck?.name) {
            fetch('http://localhost:5000/volunteerCreate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(volunteerCheck),
            })
                .then(response => response.json())
                .then(take => console.log(take))
        }
    }}
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const description = event.target.description.value;
        const date = event.target.date.value;
        const books = event.target.books.value;
        const volunteerDetail = { name, email, description, date, books };
        fetch('http://localhost:5000/volunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(volunteerDetail),
        })
            .then(response => response.json())
            .then(data => {
                event.target.reset();
                toast('Register Compleat');
                // console.log(data)
                fetch(`http://localhost:5000/volunteer/${id}`)
                    .then(res => res.json())
                    .then(volun => {
                        setVolunteerCheck(volun)

                    })
            })

    }

    return (
        <div className='text-center'>
            <div>
                <img width={200} src={headerLogo} alt="" />
            </div>
            <div>
                <div className='border py-4 mt-3 w-50 mx-auto'>
                    <h3 className='mb-5'>Register As a Volunteer</h3>
                    <div className=''>
                        <form onSubmit={handleSubmit} className='d-flex mx-auto w-50 flex-column'>
                            <input className='mt-2 p-1 ' type="text" placeholder='Full Name' name='name' required />
                            <input className='mt-2 p-1 ' type="email" name="email" id="" placeholder='Email' required />
                            <input className='mt-2 p-1 ' type="date" name="date" id="" required />
                            <input className='mt-2 p-1 ' type='text' name="description" placeholder='Description' id="" required />
                            <input name='books' className='mt-2 p-1 ' type="text" placeholder='Organized Books At The Library' required />
                            <input className='mt-2 py-2 text-white bg-primary border-0' type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;