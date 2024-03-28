import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header(){
    return(
            <div className='shadow-md py-5'> 
                <div className='flex items-center justify-between px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto'>
                    <Link to="/"><img src="/Logo.png" alt="Logo" /></Link>
                    <div className='flex lg:space-x-12'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/jobsubmission'>Submit Job</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/signUp'>Sign/Up</NavLink>
                    </div>
                </div> 
            </div>
    )
}