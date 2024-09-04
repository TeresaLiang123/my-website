import React from 'react';
import '../App.css';
import Tabs from '../components/tabs';
import ProjList from '../components/projectList';
import Gif from '../components/gif'

const Projects = () => {
  return (
    <div className="App">
      <div className='tabs'>
        <Tabs></Tabs>
      </div>
      <div className="projectDex">
        <div className="gif">
          {/* gif */}
          <Gif></Gif>
        </div>
        <div className="proj-list">
          <ProjList></ProjList>
        </div>
      </div>
    </div>
  )
}

export default Projects;