import './users.css';
import { NavLink } from 'react-router-dom';
import loader from '../grid.svg';

const Users = ({ userData }) => {
  return (
    <section className="users">
      <h1>Random Users</h1>
      <div className="card-container">
        {userData.length === 0 && <img src={loader} alt="svg loader" />}
        {userData.map((user) => (
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
