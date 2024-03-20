import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import JobSubmission from './Pages/jobsubmission';
import ResultsArray from './customComponents/resultsArray';
import Layout from './Components/layout';
import ProtectedPath from './Components/protectedPath';
import SignIn from './Pages/login';
import SignUp from './Pages/signUp';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";




const firebaseConfig = {
  apiKey: "AIzaSyDR3EPa-hKwzT6agWnSSx5Pa-5dOEGEicU",
  authDomain: "nutrition-recruitment.firebaseapp.com",
  projectId: "nutrition-recruitment",
  storageBucket: "nutrition-recruitment.appspot.com",
  messagingSenderId: "387460510164",
  appId: "1:387460510164:web:aeb18154c95e58035fe641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 

const db = getDatabase(app, 'https://nutrition-recruitment-default-rtdb.europe-west1.firebasedatabase.app/');


const JobContext = React.createContext();

export default function App() {
  const [jobList, setJobList] = React.useState(() => {
    return localStorage.getItem('jobList') ? JSON.parse(localStorage.getItem('jobList')) : [];
  });


  function addJob(addedJob) {
    const jobsRef = ref(db, 'jobs'); // 'jobs' is the name of the node where you want to store job data
    push(jobsRef, addedJob)
      .then(() => {
        console.log("Job added successfully");
        // Optionally update your local state here, if needed
        setJobList(prevJobs => [...prevJobs, addedJob]);
      })
      .catch((error) => {
        console.error("Error adding job: ", error);
      });
  }
  



  return (
    <JobContext.Provider value={{ jobList, addJob }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Directly include Home as the index route of Layout */}
            <Route path="/" element={<Home />} >
              <Route path="array" element={<ResultsArray />} />
            </Route>
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
