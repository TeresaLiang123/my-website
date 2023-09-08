import './App.css';
import './index.css';
import React from 'react';

function App() {
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

const pokemarch = () => {
  return(
    <img></img>
  );
}

const tabs = [
  {
    title: 'About Me',
    img: './piplup.gif',
    page: './home.html',
    id: 1,
  },
  {
    title: 'Projects',
    img: './piplup.gif',
    page: 'https://www.amazon.com/ref=nav_logo',
    id: 2,
  },
]

// contents in description of card
const descriptions = [
  {
    prompt: 'Name: ',
    value: 'Teresa Liang',
    id: 3,
  },
  {
    prompt: 'Study: ',
    value: 'Computer Science & Design',
    id: 4,
  },
  {
    prompt: 'School & Graduation: ',
    value: 'Northeastern University, Dec. 2024',
    id: 5,
  },
  {
    prompt: 'Technical Skills: ',
    value: 'Java, Python, CSS, HTML, JavaScript',
    id: 6,
  },
  {
    prompt: 'Softwares: ',
    value: 'IntelliJ, PyCharm, Eclipse, Visual Studio Code, Atom, Windows 10',
    id: 7,
  },
]

const Tabs = () => {
  return (
      tabs.map((tab) => {
          return (<section className="tab">
            <Tab title={tab.title} img={tab.img} page={tab.page} id={tab.id}></Tab>
          </section>);
      })
  );
};

const Tab = ({title, img, page, id}) => {
  return (<div>
    <button class="button">
      <a href={page}>
      <img src={img} alt='Pixel Piplup' className="piplup"></img>
        <span className="tab-name">{title}</span>
        <Links page={page}></Links>
      </a>
    </button>
  </div>
  );

}

const Links = ({page}) => {
  return (<section>
      <ul>
          <a href={page}></a>
      </ul>
  </section>);
}

// map all description information
const Description = () => {
  return(
    descriptions.map((descr) => {
      return(<Information prompt={descr.prompt} value={descr.value}></Information>);
    })
  );
}

// return the same line of information inside card
const Information = ({prompt, value, id}) => {
  return(<section className="info">
    <span className="prompt">{prompt}</span>
    <span className="value">{value}</span>
  </section>);
}

const Picture = () => {
  return(<section>
      <img className="pic" src="./t.jpg"></img>
    </section>
  );
}

const Social = () => {
  return(<div className="icons">
    <a href="https://github.com/TeresaLiang123/Projects" target="https://github.com/TeresaLiang123/Projects">
      <img src="./github-icon.png" width="50" height="50" className="icon"></img>
    </a>
    <a href="https://www.linkedin.com/in/liang-teresa/" target="https://www.linkedin.com/in/liang-teresa/">
      <img src="./linkedin-icon.png" width="50" height="50"></img>
    </a>
    <a href="" target="">
      <img src="./gmail-icon.png" width="50" height="50"></img>
    </a>
    </div>);
}

export default App;
