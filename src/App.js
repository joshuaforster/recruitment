import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import JobSubmission from './Pages/jobsubmission';
import ResultsArray from './Pages/resultsArray';
import Layout from './Components/layout';
import ProtectedPath from './Components/protectedPath';
import SignIn from './Pages/login';
import SignUp from './Pages/signUp';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDR3EPa-hKwzT6agWnSSx5Pa-5dOEGEicU",
  authDomain: "nutrition-recruitment.firebaseapp.com",
  projectId: "nutrition-recruitment",
  storageBucket: "nutrition-recruitment.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 

const JobContext = React.createContext();

export default function App() {
  const [jobList, setJobList] = React.useState(() => {
    return localStorage.getItem('jobList') ? JSON.parse(localStorage.getItem('jobList')) : [];
  });

  function addJob(addedJob) {
    setJobList(prevJobs => {
      localStorage.setItem('jobList', JSON.stringify([...prevJobs, addedJob]));
      return [...prevJobs, addedJob]; 
    });
  }

  return (
    <JobContext.Provider value={{ jobList, addJob }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Directly include Home as the index route of Layout */}
            <Route index element={<Home />} />
            <Route path="array" element={<ResultsArray />} />
            <Route path="login" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
            {/* Wrap the protected route */}
            <Route element={<ProtectedPath />}>
              <Route path="jobsubmission" element={<JobSubmission />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </JobContext.Provider>
  );
  
}

export { JobContext };
