import { useEffect, useState } from 'react';

const Users = (props) => {
  const [userList, setUserList] = useState([]);

  async function fetchData() {
    // TO DO: change url to meet assignment requirements
    let url = 'https://randomuser.me/api/?results=20';
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    setUserList(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="users">
      <h1>Random Users</h1>
      <p>This is the random users page</p>
      <div className="card-container">
        {!userList.length && <p>There are no users yet</p>}
        {userList.map((user) => (
          <div key={user.name.last + user.cell} className="userCard">
            <img src={user.picture.medium} alt="user profile" />
            <p>{user.name.first + ' ' + user.name.last}</p>
            <p>{user.email}</p>
            <p>{user.cell}</p>
            <button>See User Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
