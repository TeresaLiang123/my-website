// import './App.css';
// import './index.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Tabs from '../components/tabs'
import Description from '../components/description';
import Social from '../components/social';
import Picture from '../components/picture';

function About() {
  return (
    <div className="App">
      <div className='tabs'>
        <Tabs></Tabs>
      </div>
      <div className="grey-outline">
        <div className="card">
            <div className="description">
              <span className="identity">Identification</span>
              <Description></Description>
              <Social></Social>
            </div>
            <Picture></Picture>
        </div>
      </div>
    </div>
  );
}

export default About;
