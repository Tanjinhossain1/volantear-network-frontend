import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useNewVolunteer from '../../hooks/useNewVolunteer';
import { TrashIcon } from '@heroicons/react/solid'

const Admin = () => {
    const [newVolunteer, setNewVolunteer] = useNewVolunteer();
    if (newVolunteer.length === 0) {
        return (
            <div className='text-center mt-5'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    const deleteVolunteer = (id) => {
        const confirmDelete = window.confirm('Are You Sure To Delete');
        if (confirmDelete) {
            fetch(`https://shielded-falls-41876.herokuapp.com/newVolunteer/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(take => {
                    const remaining = newVolunteer.filter(v => v._id !== id);
                    setNewVolunteer(remaining)
                })
        }
    }
    return (
        <div className='w-75 response mx-auto mt-5'>
            <Table striped bordered hover>
                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registating Date</th>
                        <th>Volunteer List</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        newVolunteer.map(volunteer => <tr key={volunteer._id}>
                            <td>{volunteer.name}</td>
                            <td>{volunteer.email}</td>
                            <td>{volunteer.date}</td>
                            <td>{volunteer.books}</td>
                            <td className='text-center bg-danger' onClick={() => deleteVolunteer(volunteer._id)}>
                                <TrashIcon width={50} className="text-white" />
                            </td>
                        </tr>
                        )
                        // newVolunteer.map(volunteer => <Volunteer key={volunteer._id} deleteVolunteer={deleteVolunteer} volunteer={volunteer}></Volunteer>)
                    }
                </tbody>
            </Table>



        </div >
    );
};

export default Admin;