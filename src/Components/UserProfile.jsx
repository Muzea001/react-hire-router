import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function UserProfile({ onHire }) {
const {userId} = useParams();
const [user,setUser] = useState(null);
const navigate = useNavigate();

useEffect(() => {
    fetch(`https://randomuser.me/api/?results=1&seed=${userId}`)
    .then(response => response.json())
    .then(data => setUser(data.results[0]))
    .catch(error => console.error(error))
},[userId]);

const handleHire = () => {
    onHire(user);
    navigate('/');
  };

if(!user){
    return <div>Loading....</div>
}

return (
    <div>
      <h2>{user.name.first} {user.name.last}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <button onClick={handleHire}>Hire</button>
    </div>
  );
}

UserProfile.propTypes = {
    onHire: PropTypes.func.isRequired,
  };

