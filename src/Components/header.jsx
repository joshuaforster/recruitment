import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/jobsubmission'>Submit Job</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signUp'>Sign/Up</NavLink>
        </>
    )
}