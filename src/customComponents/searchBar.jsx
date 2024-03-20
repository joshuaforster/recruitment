import React from 'react'
import ResultsArray from './resultsArray'

export default function SearchBar(props){

    return(
        <div className="max-w-2xl mx-auto p-4">
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-sm">
            <input
              className="border-blue-900 flex-grow p-2 outline-none text-sm text-gray-700 placeholder-gray-400 border-2 rounded-t-lg sm:rounded-tl-lg sm:rounded-tr-none sm:border-r-0"
              type="text"
              placeholder="Job type"
            />
            <input
              className="flex-grow p-2 outline-none text-sm text-gray-700 placeholder-gray-400 border-t-2 sm:border-t-0 sm:border-l-2 sm:border-r-2"
              type="text"
              placeholder="City or postcode"
            />
            <button onClick={props.onSearch}className="bg-blue-500 text-white rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg px-4 py-2 hover:bg-blue-600 w-full sm:w-auto">
              Find jobs
            </button>
          </div>
        </div>
    )
}