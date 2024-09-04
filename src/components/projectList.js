// import React, {useState} from "react";
// import Links from './links';
// import Gif from '../components/gif'

// const list = [
//     {
//       name: "Hangman Covey Town",
//       url: "https://github.com/TeresaLiang123/hangman-covey-town",
//       lang: "./react.png",
//       img: ""
//     },
//     {
//       name: "MyMovieList Website",
//       url: "https://github.com/caocynthia/webdev-project",
//       lang: "./react.png",
//       img: "./MyMovieList.png"
//     },
//     {
//       name: "Web Crawler",
//       url: "https://github.com/TeresaLiang123/Projects/tree/master/Web%20Crawler",
//       lang: "./python.png",
//       img: "./WebCrawler.png"
//     },
//     {
//       name: "Image Processing Application",
//       url: "https://github.com/TeresaLiang123/Projects/tree/master/Image%20Processing",
//       lang: "./java.png",
//       img: "./ImageProcessor.png"
//     },
//     {
//       name: "Marble Solitaire",
//       url: "https://github.com/TeresaLiang123/Projects/tree/master/Marble%20Solitaire",
//       lang: "./java.png",
//       img: "./MarbleSolitaire.png"
//     },
//     {
//       name: "Pokemon Website",
//       url: "https://github.com/TeresaLiang123/Projects/tree/master/Pokemon%20Guide",
//       lang: "./html.png",
//       img: "./PokemonGuide.png"
//     }
//   ]
  

//   const ProjList = () => {
//     return(
//       list.map((proj) => {
//         return(
//             <Proj name={proj.name} url={proj.url} lang={proj.lang} img={proj.img}></Proj>
//             )
//       })
//     )
//   }
  
//   const Proj = ({name, url, lang, img}) => {

//     return(
//       <div>
//         <button className="button-proj" onMouseEnter={() => setGif(img)} onMouseLeave={() => setGif(img)}>
//           <a href={url}>
//             <img src={lang} alt="logo" className="logo"></img>
//             <span className="proj-name">{name}</span>
//             <Links page={url}></Links>
//           </a>
//         </button>
//       </div>
//     )
//   }

//   export default ProjList;