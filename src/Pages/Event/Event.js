import React from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Event = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const createVolunteer = (event) => {
        event.preventDefault();
        const name = event.target.title.value;
        const description = event.target.description.value;
        const date = event.target.date.value;
        const img = event.target.imgUrl.value;
        const volunteerInfo = { name, img, description, date }
        // https://shielded-falls-41876.herokuapp.com/
        fetch('http://localhost:5000/addVolunteer', {
            method: 'POST',
            headers: {
                'authorization':`${user?.email} ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(volunteerInfo),
        })
            .then(response => response.json())
            .then(data => {
                event.target.reset()
                toast('volunteer Create Compleat')
            })
    }
    return (
        <div className='bg-color bg-white'>
            <div className='bg-color-extra p-3'>
                <h6>Volunteer Register List</h6>
            </div>
            <form onSubmit={createVolunteer}>
                <div  className=' h-50 rounded-3 bg-white p-5 w-100 mt-5 event-container  mx-auto'>
                    <div className='mx-5'>
                        <label htmlFor="title">Event Title</label>
                        <br />
                        <input className='mb-2 ' type="text" name='title' placeholder='Event Title' required />
                        <br />
                        <label htmlFor="description">Description</label>
                        <br />
                        <textarea className='mb-2 ' name="description" id="" placeholder='Description' cols="40" rows="5"></textarea>
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <br />
                        <input className='mb-2' type="date" name='date' />
                        <br />
                        <label htmlFor="imgUrl" >Image Url</label>
                        <br />
                        <input className='mb-2 ' type="text" placeholder='Image Url' name='imgUrl' required />
                    </div>
                </div>
                <div className='text-end button-submit'>
                    <input className='text-center btn btn-primary mx-5 w-25 mt-2' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Event;