import Home from '../Home/Home';
import Users from '../Users/Users';
import Address from '../Address/Address';
import Nowhere from '../Nowhere/Nowhere';
import UserDetails from '../UserDetails/UserDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Main = (props) => {
  const [userData, setUserData] = useState([]);

  function findUser(id) {
    return userData.find((user) => id === user.cell);
  }

  async function fetchData() {
    let url =
      'https://randomuser.me/api/?seed=cano0029&results=20&nat=au,ca,nz,gb,us';
    let resp = await fetch(url);
    let data = await resp.json();
    setUserData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Switch>
        <Route path="/users" exact>
          <Users userData={userData} findUser={findUser} />
        </Route>
        <Route path="/users/:id">
          <UserDetails findUser={findUser} />
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
    </>
  );
};

export default Main;
