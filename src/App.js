import './App.css';
import './index.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='tabs'>
        <Tabs></Tabs>
      </div>
      <div className="card">
        <div className="description">
          <Description></Description>
        </div>
        <div className="pic">
          <Picture></Picture>
        </div>
      </div>
    </div>
  );
}

const tabs = [
  {
    title: 'About Me',
    img: './pngfind.com-pokemon-pixel-png-3370273.png',
    page: './home.html',
    id: 1,
  },
  {
    title: 'Projects',
    img: './pngfind.com-pokemon-pixel-png-3370273.png',
    page: './home.html',
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
    value: 'Northeastern University Dec. 2024',
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
          return (<Tab title={tab.title} img={tab.img} page={tab.page} id={tab.id}></Tab>);
      })
  );
};

const Tab = ({title, img, page, id}) => {
  return (<div className="box">
      <img src={img} alt='Pixel Piplup' width="50" height="50"></img>
      <span className="tab-name">{title}</span>
      <Links page={page}></Links>
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
      return(<Information prompt= {descr.prompt} value={descr.value}></Information>);
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
  return(<section className="pic">
    <img src="./t.jpg"></img>
  </section>);
}

export default App;
