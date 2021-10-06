import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Address from '../Address/Address';
import Nowhere from '../Nowhere/Nowhere';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  // TO DO: Do I need a /user/id route and a UserDetails component?
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/addresses">
            <Address />
          </Route>
          <Route path="/404">
            <Nowhere />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
