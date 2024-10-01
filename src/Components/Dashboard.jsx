import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard( hiredPeople) {
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => setUsers(data.results))
    .catch(error => console.error(error))
},[]);


return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h3>All Users</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <Link to={`/profile/${user.login.uuid}`}>
                  {user.name.first} {user.name.last}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Hired People</h3>
          <ul>
            {hiredPeople.map((person, index) => (
              <li key={index}>
                {person.name.first} {person.name.last}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

