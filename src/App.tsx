import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Report from './pages/Report';
import Home from './pages/Home';
import AppLayout from './components/layout/AppLayout';
import NoMatche from './pages/NoMatche';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="report" element={<Report />} />
          <Route path="*" element={<NoMatche />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
