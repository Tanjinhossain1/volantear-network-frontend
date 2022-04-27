import React from 'react';
import useVolunteer from '../../../hooks/useVOlunteer';
import Volunteer from '../Volunteer/Volunteer';

const Volunteers = () => {
    const [volunteers,setVolunteers] = useVolunteer()
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