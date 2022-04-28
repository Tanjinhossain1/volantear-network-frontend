import { useEffect, useState } from "react";


const useVolunteer = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-41876.herokuapp.com/volunteer`)
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return [volunteers, setVolunteers]
};

export default useVolunteer;