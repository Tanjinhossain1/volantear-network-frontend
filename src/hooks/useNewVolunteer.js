import { useEffect, useState } from 'react';

const useNewVolunteer = () => {
    const [newVolunteer, setNewVolunteer] = useState([]);
   
    useEffect(()=>{
        fetch(`http://localhost:5000/newVolunteer`)
        .then(res=>res.json())
        .then(data=> setNewVolunteer(data))
    },[])
    return [newVolunteer,setNewVolunteer]
};

export default useNewVolunteer;