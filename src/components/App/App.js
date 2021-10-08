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
  // TO DO: Move state and fetchData to another main component
  // make App only for route
  const [userData, setUserData] = useState([]);

  async function fetchData() {
    // TO DO: change url to meet assignment requirements
    // TO DO: move state, fetchData, useEffect from here to another main component that has User, UserDetails, Address
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
            <Address userData={userData} />
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
