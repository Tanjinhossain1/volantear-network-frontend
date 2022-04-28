import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Volunteer = ({ volunteer, volunteers, setVolunteers }) => {
    const { name, img, _id } = volunteer;
    const bgColor = ['#ED7359', '#F6C341 ', '#5321F2', '#23B5A8', '#E910DA', '#1799DD', '#DF2953']

    const item = bgColor[Math.floor(Math.random() * bgColor.length)];
    const navigate = useNavigate()

    const volunteerAdd = (id) => {
        const confirmDeletes = window.confirm('You Want To Delete It Then Click Ok ');
        if (confirmDeletes) {
            const confirmDelete = window.confirm('Are you sure to delete');
            if (confirmDelete) {
                fetch(`https://shielded-falls-41876.herokuapp.com/volunteer/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(volun => {
                        const remaining = volunteers.filter(v => v._id !== id);
                        setVolunteers(remaining)
                    })
            }
        }
        else {
            const decline = window.confirm('you want to register for Volunteer');
            if (decline) {
                navigate(`/register/${id}`)
                toast('register for your volunteers')
            }
        }
    }
    return (
        <div className='m-5  position-relative '>
            <img className='w-100 ' src={img} alt="" />
            <h5 onClick={() => volunteerAdd(_id)} style={{ backgroundColor: `${item}` }} className='bottom-left text-center text-white'>{name}</h5>
        </div>
    );
};


export default Volunteer;