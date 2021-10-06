import { useState } from 'react';

const Home = (props) => {
  const [image, setImage] = useState('insert image');
  function showInstructions() {
    setImage('I am your instructions I will tell you to do a lot of things!');
  }
  return (
    <div className="home">
      <h1 className="greeting"> howdy()</h1>
      <p>Welcome to josRandom Playground</p>
      <p onClick={showInstructions}>button</p>
      <p>{image}</p>
    </div>
  );
};

export default Home;
