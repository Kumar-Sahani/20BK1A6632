import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllTrains from './pages/AllTrains';
import SingleTrain from './pages/SingleTrain';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/all-trains' element={<AllTrains />} />
        <Route path='/single-trains/:id' element={<SingleTrain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
