import { useEffect, useState } from "react";


const useVolunteer = () => {
    const [volunteers, setVolunteers] = useState([]);
  
    useEffect(() => {
        fetch(`http://localhost:5000/volunteer`)
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return [volunteers,setVolunteers]
};

export default useVolunteer;