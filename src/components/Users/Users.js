const Users = ({ userData }) => {
  return (
    <div className="users">
      <h1>Random Users</h1>
      <p>This is the random users page</p>
      <div className="card-container">
        {userData &&
          userData.map((user) => (
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
