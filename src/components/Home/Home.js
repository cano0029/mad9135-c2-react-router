import ghost from './ghost.png';
import './home.css';
import { useState } from 'react';

const Home = (props) => {
  const [instructions, setInstructions] = useState('');
  function showInstructions() {
    setInstructions(`I am your instructions I will tell you to do a lot of things! Nullam
    eget felis eget nunc lobortis mattis aliquam faucibus. Nam at lectus
    urna duis convallis convallis tellus id interdum. Orci nulla
    pellentesque dignissim enim. Est lorem ipsum dolor sit amet. Commodo
    quis imperdiet massa tincidunt nunc. Auctor augue mauris augue neque
    gravida in fermentum et sollicitudin.`);
  }
  return (
    <main className="home-container">
      <div className="home">
        <h1 className="greeting">
          <span>howdy</span>()
        </h1>
        <p>
          Welcome to josRandom Playground. I'm using the Random Generator API to
          show you random and fake data. Read the instructions to get started.
        </p>
        <button onClick={showInstructions}>Show Instructions</button>
      </div>
      <div className="img-container">
        <img src={ghost} alt="ghost" />
      </div>
      <div className="instructions">
        <p>{instructions}</p>
      </div>
    </main>
  );
};

export default Home;
