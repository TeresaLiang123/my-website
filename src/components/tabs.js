import Links from '../components/links';

const tabs = [
    {
      title: 'About Me',
      img: './piplup.gif',
      pokemon: 'piplup',
      page: '/about',
      id: 1,
    },
    {
      title: 'Projects',
      img: './piplup.gif',
      pokemon: 'piplup',
      page: '/projects',
      id: 2,
    },
  ]
  
  const Tabs = () => {
    return (
        tabs.map((tab) => {
            return (
              <Tab title={tab.title} img={tab.img} page={tab.page} id={tab.id} pokemon={tab.pokemon}></Tab>
            );
        })
    );
  };
  
  const Tab = ({title, img, page, id, pokemon}) => {
    return (<div>
      <button class="button hoverScale11">
        <a href={page} rel="noreferrer">
        <img src={img} alt='Pixel' className={pokemon}></img>
          <span className="tab-name">{title}</span>
          <Links page={page}></Links>
        </a>
      </button>
    </div>
    );
  }



export default Tabs;