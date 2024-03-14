import React from 'react'
import SearchBar from '../customComponents/searchBar'
import { Outlet } from 'react-router-dom'

export default function Home(){

    return(
        <>
            <h1 className='text-black'>This is the home Page</h1>
            <SearchBar />
            <Outlet />
        </>
    )
}