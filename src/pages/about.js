// import './App.css';
// import './index.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {React,useState} from 'react';
import Tabs from '../components/tabs'
import Description from '../components/description';
import Social from '../components/social';
import Picture from '../components/picture';
import ReactCardFlip from 'react-card-flip';

function About() {
  const [isFlipped, setIsFlipped] = useState(false) 

  const flip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="App">
      <div className='tabs'>
        <Tabs></Tabs>
      </div>
        <ReactCardFlip className= "black-outline" flipDirection='horizontal' isFlipped={isFlipped}>
              <div className="card" onClick={flip}>
                    <div className="descriptionId">
                    <span className="identity">Identification</span>
                    <Description></Description>
                    <Social></Social>
                    </div>
                    <Picture className="picture"></Picture>
              </div>
              <div className="card" onClick={flip}>
                    <div className="descriptionId">
                    <p className="aboutMeDescription">
                    Hello, my name is Teresa. I am a fourth-year student at Northeastern University, 
                    majoring in Computer Science and Design. My fascination with the inner workings 
                    of electronic devices, social media, and the internet sparked my decision to pursue 
                    Computer Science. This curiosity has been with me since my parents introduced me to 
                    computers in elementary school. During high school, I took a Computer Science course 
                    and was captivated by the critical thinking and problem-solving involved in coding.
                    <br></br>
                    <br></br>
                    In addition to my passion for technology, I have always had an interest in art. 
                    The opportunity to integrate design with technology intrigued me, leading me to 
                    explore how these two fields intersect. Outside of my academic pursuits, I enjoy 
                    playing basketball, video games, and spending quality time with friends.
                    </p>
                    </div>
                    <Picture className="picture"></Picture>
              </div>
        </ReactCardFlip>
    </div>
  );
}

export default About;
