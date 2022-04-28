import { useEffect, useState } from 'react';

const useNewVolunteer = () => {
    const [newVolunteer, setNewVolunteer] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-41876.herokuapp.com/newVolunteer`)
            .then(res => res.json())
            .then(data => setNewVolunteer(data))
    }, [])
    return [newVolunteer, setNewVolunteer]
};

export default useNewVolunteer;