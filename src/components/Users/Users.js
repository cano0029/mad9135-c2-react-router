import './users.css';
import { NavLink } from 'react-router-dom';
import loader from '../grid.svg';

const Users = ({ userData }) => {
  console.log(loader);
  return (
    <section className="users">
      <h1>Random Users</h1>
      <div className="card-container">
        {/* !{userData && <img src={loader} alt="loader svg" />}
        // Note: will never output line 11 (loader) because I am not passing in an empty userData */}
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
    </section>
  );
};

export default Users;
