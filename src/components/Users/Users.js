import './users.css';
import { Link } from 'react-router-dom';

// To do: add a loader
const Users = ({ userData }) => {
  console.log(userData);
  return (
    <div className="users">
      <h1>Random Users</h1>
      <p>This is the random users page</p>
      <div className="card-container">
        {userData &&
          userData.map((user) => (
            <div key={user.cell} className="userCard">
              <img src={user.picture.medium} alt="user profile" />
              <p>{user.name.first + ' ' + user.name.last}</p>
              <p>{user.email}</p>
              <p>{`📞 ${user.cell}`}</p>
              <Link to={`/users/${user.cell}`}>
                <button>See User Details</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users;
