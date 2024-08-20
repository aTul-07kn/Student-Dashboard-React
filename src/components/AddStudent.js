import React from 'react'
import axios from "axios";

const AddStudent = ({name, setName, roll, setRoll, email, setEmail, phno, setPhno, students, setStudents, API_URL}) => {

  const handleName=(e)=>{
    const curName=e.target.value;
    setName(curName);
  }

  const handleRoll=(e)=>{
    const curRoll=e.target.value;
    setRoll(curRoll);
  }

  const handlePhno=(e)=>{
    const curPhno=e.target.value;
    setPhno(curPhno);
  }

  const handleEmail=(e)=>{
    const curEmail=e.target.value;
    setEmail(curEmail);
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const newStudent={roll, name, email, phno};
    try{
      await axios.post(API_URL, newStudent);
      setStudents((students)=>[...students, newStudent]);
      alert(newStudent.name +" has been added");
    }
    catch(error){
      console.error("Error in adding student:", error);
    }
  }
  
  return (
    <form className='addstudent backdrop-blur-md shadow-xl p-7 rounded-xl' onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">Add Student</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="rollno" className="block text-sm font-medium leading-6 text-gray-900">
                    Roll Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="rollno"
                      name="rollno"
                      type="text"
                      autoComplete="given-name"
                      required
                      placeholder='e.g. 6001'
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6"
                      onChange={handleRoll}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="given-name"
                      required
                      placeholder='Abc Sql'
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6"
                      onChange={handleName}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder='abc@mail.com'
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6"
                      onChange={handleEmail}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="given-name"
                      required
                      placeholder='9990001112'
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6"
                      onChange={handlePhno}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
              Clear
            </button>
            <button
              type="submit"
              className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Save
            </button>
          </div>
        </form>    
  )
}

export default AddStudent