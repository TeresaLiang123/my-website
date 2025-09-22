import React from 'react'

const Social = () => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

    return(<div className="icons" onClick={handleClick}>
      <a class='hoverScale12 tooltip-container' href="https://github.com/TeresaLiang123/Projects" target="_blank" rel="noreferrer">
        <span className='tooltip-text'>My GitHub: TeresaLiang123</span>
        <img src="./github-icon.png" width="50" height="50" className="icon"></img>
      </a>
      <a class='hoverScale12 tooltip-container' href="https://www.linkedin.com/in/liang-teresa/" target="_blank" rel="noreferrer">
        <span className='tooltip-text'>LinkedIn</span>
        <img src="./linkedin-icon.png" width="50" height="50"></img>
      </a>
      <a class='hoverScale12 tooltip-container' href="mailto:liangte52@gmail.com" target="">
        <span className='tooltip-text'>My Email: liangte52@gmail.com</span>
        <img src="./pokemonMail.png" width="50" height="50"></img>
      </a>
      </div>);
  }

export default Social;