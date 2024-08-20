import React from 'react'
import axios from "axios";

const Dashboard = ({students, setStudents, API_URL}) => {

    const calculateTimeDifference = (checkInTimeStr, checkOutTimeStr) => {
        const parseTimeString = (timeStr) => {
            const [time, period] = timeStr.split(' ');
            const [hours, minutes, seconds] = time.split(':').map(Number);
    
            let hours24 = hours;
            if (period === 'pm' && hours < 12) {
                hours24 += 12;
            } else if (period === 'am' && hours === 12) {
                hours24 = 0;
            }
    
            const now = new Date();
            return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours24, minutes, seconds);
        };
    
        const checkInDate = parseTimeString(checkInTimeStr);
        const checkOutDate = parseTimeString(checkOutTimeStr);
    
        const differenceMs = checkOutDate - checkInDate;
    
        const totalHours = Math.floor(differenceMs / (1000 * 60 * 60));
        const totalMinutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    
        return `${totalHours} hours ${totalMinutes} minutes`;
    };



    const handleCheckin = async (rollNo) => {
        try {
            setStudents((prevStudents) => {
                const updatedStudents = prevStudents.map((student) =>
                    student.roll === rollNo
                        ? { ...student, checkInTime: new Date().toLocaleTimeString() }
                        : student
                );
                
                const studentToUpdate = updatedStudents.find(
                    (student) => student.roll === rollNo
                );
    
                if (studentToUpdate) {
                    axios.put(`${API_URL}/${studentToUpdate.id}`, studentToUpdate)
                        .then(response => {
                            console.log('Check-in time updated successfully:', response.data);
                        })
                        .catch(error => {
                            console.error('Error updating check-in time:', error);
                        });
                }
    
                return updatedStudents;
            });
        } catch (error) {
            console.error('Error updating check-in time:', error);
        }
    };
    
    const handleCheckout = async (rollNo) => {
        try {
            setStudents((prevStudents) => {
                const updatedStudents = prevStudents.map((student) =>
                    {
                        if(student.roll === rollNo && student.checkInTime) {
                            const checkInTime = student.checkInTime;
                            const checkOutTime = new Date().toLocaleTimeString();
                            const totalTime= calculateTimeDifference(checkInTime, checkOutTime);
                            return {
                                ...student,
                                checkOutTime: checkOutTime,
                                totalTime: totalTime
                            };
                        }

                        return student;
                    }
                );
    
                const studentToUpdate = updatedStudents.find(
                    (student) => student.roll === rollNo
                );

                if (studentToUpdate.checkInTime) {
                    axios.put(`${API_URL}/${studentToUpdate.id}`, studentToUpdate)
                        .then(response => {
                            console.log('Check-out time updated successfully:', response.data);
                        })
                        .catch(error => {
                            console.error('Error updating check-out time:', error);
                        });

                    
                }
                
                else{
                    alert("Checkin first to Checkout");
                    return prevStudents;
                }
    
                return updatedStudents;
            });
        } catch (error) {
            console.error('Error updating check-out time:', error);
        }
    };
  return (
    <div className='min-h-screen bg-neutral-100 p-9'>
        <h2 className='text-xl font-bold'>
            Student Dashboard
        </h2>

        <div className="relative overflow-x-auto shadow-xl sm:rounded-lg m-6">
            <table className="bg-gray-600 w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-sm text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-gray-900">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Roll Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Student Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Check-in Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Check-out Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student)=>{
                            return(        
                                <tr key={student.roll} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {student.roll}
                                    </th>
                                    <td className="px-6 py-4">
                                        {student.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.phno}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {
                                            student.checkInTime ? 
                                            (student.checkInTime) : (<button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-3 rounded"
                                            onClick={()=>handleCheckin(student.roll)}>Check-in
                                            </button>)
                                        }
                                    </td>
                                    <td className='px-6 py-4'>
                                        {
                                            student.checkOutTime ? 
                                            student.checkOutTime : <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded' onClick={()=>handleCheckout(student.roll)}>Check-out</button>
                                        }
                                    </td>
                                    <td className='px-6 py-4'>
                                        {
                                            student.totalTime ? student.totalTime : "-"
                                        }
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard