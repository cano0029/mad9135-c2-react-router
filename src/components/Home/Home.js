import './home.css';
import { useState } from 'react';

const Home = (props) => {
  const [instructions, setInstructions] = useState('');
  function showInstructions() {
    setInstructions(
      `I am your instructions. I will tell you to do a lot of things!
      First, to see my list of randomly generated users, go the User Page. 
      While you are there, you will be able to navigate to see a clicked user's Details
      Page. Finally, if you wish to see random addresses, simply navigate to the Address Page. 
      There, you can also navigate to a user's Details Page by clicking on their profile picture or name. 
      I hope that wasn't too confusing... ENJOY! 
      `
    );
  }
  return (
    <main className="home-container">
      <div className="home">
        <h1 className="greeting">
          <span>howdy</span>()
        </h1>
        <p>
          Welcome to josRouter! Here, I will show you random and fake user data
          using the RandomUser API. Read the instructions to get started.
        </p>
        <button onClick={showInstructions}>Show Instructions</button>
      </div>
      <div className="instructions">
        <p>{instructions}</p>
      </div>
    </main>
  );
};

export default Home;
