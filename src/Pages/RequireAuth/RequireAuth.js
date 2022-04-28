import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    if (loading) {
        return (
            <div className='text-center mt-5'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    if(user?.emailVerified){
       toast('true')
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;