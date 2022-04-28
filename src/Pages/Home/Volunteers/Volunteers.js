import React from 'react';
import { Spinner } from 'react-bootstrap';
import useVolunteer from '../../../hooks/useVOlunteer';
import Volunteer from '../Volunteer/Volunteer';

const Volunteers = () => {
    const [volunteers,setVolunteers] = useVolunteer()
    if (volunteers.length === 0) {
        return (
            <div className='text-center mt-5'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden "></span>
                </Spinner>
            </div>
        )
    }
    return (
        <div>
            <div className='d-grid volunteer-contain'>
           
                {
                    volunteers.map((volunteer,index) => <Volunteer setVolunteers={setVolunteers} volunteers={volunteers} key={index} volunteer={volunteer}></Volunteer>)
                }
               
            </div>
            
        </div>
    );
};

export default Volunteers;