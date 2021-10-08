import './home.css';
import { useState } from 'react';
import Instructions from '../Instructions';

const Home = (props) => {
  const [image, setImage] = useState('insert image');
  function showInstructions() {
    setImage(Instructions);
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
      <div className="instructions">
        <p>{image}</p>
      </div>
    </main>
  );
};

export default Home;
