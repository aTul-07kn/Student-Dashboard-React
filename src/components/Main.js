import React from 'react'
import AddStudent from './AddStudent'

const Main = ({name, setName, roll, setRoll, email, setEmail, phno, setPhno, students, setStudents, API_URL}) => {
  return (
    <div className='p-9 bg-neutral-100'>
        <h1 className='text-center text-4xl font-bold'>Student Attendance System</h1>
        <AddStudent name={name}  setName={setName} roll={roll} setRoll={setRoll}  email={email} setEmail={setEmail} phno={phno} setPhno={setPhno} students={students} setStudents={setStudents} API_URL={API_URL}/>
    </div>
  )
}

export default Main