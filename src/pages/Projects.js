import React, {useState} from 'react';
import '../App.css';
import Tabs from '../components/tabs';
import Gif from '../components/gif'
import Links from '../components/links';

const Projects = () => {
  
  const [gif, setGif] = useState("");
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const list = [
    {
      name: "Hangman Covey Town",
      url: "https://github.com/TeresaLiang123/hangman-covey-town",
      lang: "./react.png",
      img: "Hangman.png",
      date: "October-December 2024",
      info: "A full-stack Hangman game with a unique feature that allows players to compete against each other in guessing the word. Players are connected through Covey Town, a virtual platform that facilitates user interactions through various activities."
    },
    {
      name: "MyMovieList Website",
      url: "https://github.com/caocynthia/webdev-project",
      lang: "./react.png",
      img: "./MyMovieList.png",
      date: "December 2024",
      info:"A full-stack movie website where users can search for movies, like their favorites, and sign up or log into their accounts."
    },
    {
      name: "Web Crawler",
      url: "https://github.com/TeresaLiang123/Projects/tree/master/Web%20Crawler",
      lang: "./python.png",
      img: "./WebCrawler.png",
      date: "March 2023",
      info: "A web crawler designed to navigate a website and search for hidden flags."
    },
    {
      name: "Image Processing Application",
      url: "https://github.com/TeresaLiang123/Projects/tree/master/Image%20Processing",
      lang: "./java.png",
      img: "./ImageProcessor.png",
      date: "June 2022",
      info: "An image processor that lets users load an image or TIFF file from their computer. Users can apply various effects such as flip, grayscale, intensity adjustment, luma correction, brightness, blur, sharpen, sepia tone, and view a histogram displaying the frequency distribution of their image."
    },
    {
      name: "Marble Solitaire",
      url: "https://github.com/TeresaLiang123/Projects/tree/master/Marble%20Solitaire",
      lang: "./java.png",
      img: "./MarbleSolitaire.png",
      date: "May-June 2022",
      info: "A single player game with multiple different versions of Marble Solitaire that is played in the console."
    },
    {
      name: "Pokemon Website",
      url: "https://github.com/TeresaLiang123/Projects/tree/master/Pokemon%20Guide",
      lang: "./html.png",
      img: "./PokemonGuide.png",
      date: "January 2021",
      info: "A fun website for Pokémon enthusiasts to explore information on specific generations of the game."
    }
  ]
  

  const ProjList = () => {
    return(
      list.map((proj) => {
        return(
            <div>
              <button className="button-proj" onMouseEnter={() => {setGif(proj.img); setInfo(proj.info); setName(proj.name); setDate(proj.date)}} onMouseLeave={() => {setGif(proj.img); setInfo(proj.info); setName(proj.name); setDate(proj.date)}}>
                <a href={proj.url}>
                  <img src={proj.lang} alt="logo" className="logo"></img>
                  <span className="proj-name">{proj.name}</span>
                  <Links page={proj.url}></Links>
                </a>
              </button>
            </div>
            )
      })
    )
  }


  return (
    <div className="App">
      <div className='tabs'>
        <Tabs></Tabs>
      </div>
      <div className="projectDex">
        <div className="project-info">
          <div className="infoTitleBox">
            <h1 className="infoTitle">{name}</h1>
          </div>
          <div className="gifBackground">
            <div className="gif">
              <Gif image={gif}></Gif>
            </div>
          </div>
          <div className="infoBackground">
            <h2 className="infoTitle">Info</h2>
            <p className="description">Completion: {date}</p>
            <p className="description">{info}</p>
          </div>
        </div>
        <div className="proj-list">
          {ProjList()}
        </div>
      </div>
    </div>
  )
}

export default Projects;