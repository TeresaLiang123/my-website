import React from "react";
import Links from './links';

const list = [
    {
      name: "Web Crawler",
      url: "https://github.com/TeresaLiang123/Projects/tree/master/Web%20Crawler",
      lang: "./python.png",
    },
    {
      name: "Image Processing Application",
      url: "https://github.com/TeresaLiang123/Projects/tree/master/Image%20Processing",
      lang: "./java.png",
    },
    {
      name: "Marble Solitaire",
      url: "https://github.com/TeresaLiang123/Projects/tree/master/Marble%20Solitaire",
      lang: "./java.png",
    },
    {
      name: "Pokemon Website",
      url: "https://github.com/TeresaLiang123/Projects/tree/master/Pokemon%20Guide",
      lang: "./html.png",
    }
  ]
  
  const ProjList = () => {
    return(
      list.map((proj) => {
        return(
            <Proj name={proj.name} url={proj.url} lang={proj.lang}></Proj>
            )
      })
    )
  }
  
  const Proj = ({name, url, lang}) => {
    return(
      <div>
        <button className="button-proj">
          <a href={url}>
            <img src={lang} alt="logo" className="logo"></img>
            <span className="proj-name">{name}</span>
            <Links page={url}></Links>
          </a>
        </button>
      </div>
    )
  }

  export default ProjList;