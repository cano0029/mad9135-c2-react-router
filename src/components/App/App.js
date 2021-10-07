import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Address from '../Address/Address';
import Nowhere from '../Nowhere/Nowhere';
import UserDetails from '../UserDetails/UserDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  // TO DO: Do I need a /user/id route and a UserDetails component?
  const [userData, setUserData] = useState([]);

  async function fetchData() {
    // TO DO: change url to meet assignment requirements
    let url = 'https://randomuser.me/api/?results=20';
    let resp = await fetch(url);
    let data = await resp.json();
    setUserData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/users" exact>
            <Users userData={userData} />
          </Route>
          <Route path="/users/:id">
            <UserDetails userData={userData} />
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
