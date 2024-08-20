import React from 'react'
import { NavLink } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
            <img className='h-auto max-w-2xl' src={`${process.env.PUBLIC_URL}/images/404error.png`} alt="404 ERROR" />
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <div className='flex text-indigo-500 text-xl font-extrabold'>
              <NavLink className={"m-2"} to='/'>Home</NavLink>
              <NavLink className={"m-2"} to='/dashboard'>Dashboard</NavLink>
            </div>
    </div>
  )
}

export default Page404