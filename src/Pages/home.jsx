import React from 'react'
import SearchBar from '../customComponents/searchBar'
import { Outlet } from 'react-router-dom'
import JobSubmission from './jobsubmission'


export default function Home(){

    console.log(JobSubmission)
    return(
        <>
            <h1 className='text-green text-2xl'>This is the home Page</h1>
            <SearchBar />
            <Outlet />
        </>
    )
}