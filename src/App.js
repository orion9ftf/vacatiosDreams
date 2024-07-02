// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Switch } from 'react-router-dom';
//import VacationsDreams from './VacationsDreams/VacationsDreams';
import ShowVacations from './components/ShowVacations';
import { Switch } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes>
          <Route path='/' element={<ShowVacations></ShowVacations>}></Route>
        </Routes>
      </Switch>
    </BrowserRouter>
  );
}

export default App;