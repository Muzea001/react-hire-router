import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import UserProfile from './Components/UserProfile';
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const handleHire = (person) => {
    setHiredPeople([...hiredPeople, person]);
  }

  return (
      <>
        <header>
          <h1>Hire Your Team</h1>
          <nav>
            <ul>
              <li>Dashboard</li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:userId" element={< UserProfile onHire={handleHire}/>} />
          <Route path="/view/:id" element={<UserProfile onHire={handleHire} />} />
        </Routes>
      </>
  );
}