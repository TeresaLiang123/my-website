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
      value: 'Java, Python, CSS, HTML, JavaScript, React',
      id: 6,
    },
    {
      prompt: 'Softwares: ',
      value: 'IntelliJ, PyCharm, Eclipse, Visual Studio Code, Atom, Windows 11',
      id: 7,
    },
  ]
  
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

  export default Description;