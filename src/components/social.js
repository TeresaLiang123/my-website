const Social = () => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

    return(<div className="icons" onClick={handleClick}>
      <Link class='hoverScale12 tooltip-container' to="https://github.com/TeresaLiang123/Projects" target="_blank" rel="noreferrer">
        <span className='tooltip-text'>My GitHub: TeresaLiang123</span>
        <img src="./github-icon.png" alt="github icon" width="50" height="50" className="icon"></img>
      </Link>
      <Link class='hoverScale12 tooltip-container' to="https://www.linkedin.com/in/liang-teresa/" target="_blank" rel="noreferrer">
        <span className='tooltip-text'>LinkedIn</span>
        <img src="./linkedin-icon.png" width="50" height="50" alt="linkedin icon"></img>
      </Link>
      <Link class='hoverScale12 tooltip-container' to="mailto:liangte52@gmail.com" target="">
        <span className='tooltip-text'>My Email: liangte52@gmail.com</span>
        <img src="./pokemonMail.png" width="50" height="50" alt="mail icon"></img>
      </Link>
      </div>);
  }

export default Social;