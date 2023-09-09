import React from "react";
import Links from '../components/links';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const tabs = [
    {
      title: 'About Me',
      img: './piplup.gif',
      page: './about',
      id: 1,
    },
    {
      title: 'Projects',
      img: './piplup.gif',
      page: './projects',
      id: 2,
    },
  ]
  
  const Tabs = () => {
    return (
        tabs.map((tab) => {
            return (
              <Tab title={tab.title} img={tab.img} page={tab.page} id={tab.id}></Tab>
            );
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



export default Tabs;