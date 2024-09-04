import './App.css';
import './index.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<About></About>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="projects" element={<Projects></Projects>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
