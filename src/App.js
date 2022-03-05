import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Components/Search';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Search/>} />
      </Routes>
    </Router>  );
}

export default App;