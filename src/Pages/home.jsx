import React from 'react'
import SearchBar from '../customComponents/searchBar'
import ResultsArray from '../customComponents/resultsArray'
import JobSubmission from './jobsubmission'


export default function Home(){

    const [showResults, setShowResults]= React.useState(false)

    function handleSearchClick(){
        setShowResults(true)
    }

    return(
        <div className='mt-4'>
            <div className='mx-4 md:mx-12 lg:mx-24'>
                <SearchBar onSearch={handleSearchClick}/>
                {showResults && <ResultsArray/>}
            </div>
        </div>
    )
}