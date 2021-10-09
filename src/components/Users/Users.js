import './users.css';
// import UserDetails from '../UserDetails/UserDetails';
import { NavLink } from 'react-router-dom';

// To do: add a loader
const Users = ({ userData }) => {
  return (
    <section className="users">
      <h1>Random Users</h1>
      <div className="card-container">
        {userData &&
          userData.map((user) => (
            <div key={user.cell} className="userCard">
              <img src={user.picture.medium} alt="user profile" />
              <p>{user.name.first + ' ' + user.name.last}</p>
              <p>{user.email}</p>
              <p>{`📞 ${user.cell}`}</p>
              <NavLink to={`/users/${user.cell}`}>
                <button>See User Details</button>
              </NavLink>
            </div>
          ))}
      </div>
      {/* TO DO: how to move userDetails here? */}
      {/* <div className="user-details">
        <p>Im a user</p>
        <Route path="/users/:id">
          <UserDetails findUser={findUser} />
        </Route>
      </div> */}
    </section>
  );
};

export default Users;
