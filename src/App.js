import './App.css';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Page404 from './components/Page404';
const API_URL = "http://localhost:3000/student";

function App() {

  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail]  = useState('');
  const [phno, setPhno] = useState('');
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(API_URL);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main name={name}  setName={setName} roll={roll} setRoll={setRoll}  email={email} setEmail={setEmail} phno={phno} setPhno={setPhno} students={students} setStudents={setStudents} API_URL={API_URL}/>} 
        />
        <Route path="/dashboard" element={<Dashboard students={students} setStudents={setStudents} API_URL={API_URL} />}
        />
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </div>
  ); 
}

export default App;