// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import VacationsDreams from './VacationsDreams/VacationsDreams';
import ShowVacations from './components/ShowVacations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowVacations></ShowVacations>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;