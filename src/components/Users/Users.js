import { useState } from 'react';

const Users = (props) => {
  const [list, setList] = useState([]);

  async function fetchData() {
    // TO DO: change url to meet assignment requirements
    let url = 'https://randomuser.me/api/?results=20';
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    setList(data.results);
  }

  return (
    <div className="users">
      <h1 onClick={fetchData}>Random Users</h1>
      <p>This is the random users page</p>
      {!list.length && <p>There are no users yet</p>}
      {list.map((user) => (
        <div key={user.name.last + user.cell}>
          <p>{user.name.first + ' ' + user.name.last}</p>
          <p>{user.email}</p>
          <p>{user.cell}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
