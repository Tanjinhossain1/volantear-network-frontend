import { useEffect, useState } from "react";

const useVolunteer = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch('wow.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return [volunteers]
};

export default useVolunteer;