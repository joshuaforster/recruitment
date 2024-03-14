import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import ResultsArray from './Pages/resultsArray'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
           <Route path="/array" element={<ResultsArray />} /> 
           {/* Miht need to include index */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
