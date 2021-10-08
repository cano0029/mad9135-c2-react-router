import './App.css';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <footer>{/* To Do: Add footer component */}</footer>
    </div>
  );
}

export default App;
