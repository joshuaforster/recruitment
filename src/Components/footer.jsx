import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer(){
    return(
        <div className="bg-gray-700  mt-10">
            <footer className="px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto text-white flex flex-col lg:flex-row items-center justify-between p-4 lg:gap-0 gap-10 text-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Submit Job</NavLink>
                <NavLink to="/">Sign In</NavLink>
                <NavLink to="/">Create Account</NavLink>
            </footer>
        </div>
    )
}