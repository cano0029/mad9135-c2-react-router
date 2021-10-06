import { useState } from 'react';

const Users = (props) => {
  const [userList, setUserList] = useState([]);

  return (
    <div className="users">
      <h1>Random Users</h1>
      <p>This is the random users page</p>

      {!userList.length && <p>There are no users yet</p>}
      {userList.map((user) => (
        <p>{user}</p>
      ))}
    </div>
  );
};

export default Users;
