import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useNewVolunteer from '../../hooks/useNewVolunteer';

const Checkout = () => {
    const [volunteerCheck, setVolunteerCheck] = useState([]);

    // const { id } = useParams();
    useEffect(() => {
        fetch(`https://shielded-falls-41876.herokuapp.com/checkVolunteer`)
            .then(res => res.json())
            .then(data => setVolunteerCheck(data))
    }, [])

    const deleteVolunteer = (id) => {
        const confirmDelete = window.confirm('Are You Sure To Delete');
        if (confirmDelete) {
        fetch(`https://shielded-falls-41876.herokuapp.com/checkVolunteer/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(take => {
                const remaining = volunteerCheck.filter(v => v._id !== id);
                setVolunteerCheck(remaining)
            })
        }
    }
    if (volunteerCheck.length === 0) {
        return (
            <div className='text-center mt-5'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden "></span>
                </Spinner>
            </div>
        )
    }
    return (
        <div className='checkout m-5 '>
            {
                volunteerCheck.map(volunteer => <ShowVolunteer deleteVolunteer={deleteVolunteer} volunteer={volunteer} key={volunteer._id}></ShowVolunteer>)
            }
        </div>
    );
};
const ShowVolunteer = ({ volunteer, deleteVolunteer }) => {
    const { name, img, _id } = volunteer;
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    if (name && img) {
        return (
            <div className='m-5 also-check align-items-center'>
                <img className='w-50' src={img} alt="" />
                <div>
                    <div>
                        <h5 className='mx-2'>{name}</h5>
                        <p className='mx-2'>{date}</p>
                    </div>
                    <div className='text-end'>
                        <button onClick={() => deleteVolunteer(_id)} className='btn btn-light'>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Checkout;