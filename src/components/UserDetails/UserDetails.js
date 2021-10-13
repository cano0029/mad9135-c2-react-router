import { useParams } from 'react-router-dom';
import './userDetails.css';

// To do:
// add a loader
const UserDetails = (props) => {
  const { id } = useParams();
  let user = props.findUser(id);
  console.log(user);
  return (
    <>
      {user && (
        <section key={id} className="filteredUser-card">
          <div className="basic-info">
            <img src={user.picture.large} alt="user profile" />
            <p>{user.name.first + ' ' + user.name.last}</p>
            <p>{user.email}</p>
            <p>{`📞 ${user.cell}`}</p>
          </div>
          <div className="user-details">
            <h2>Other Information</h2>
            <p>{`Address: ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
            <p>{`UUID: ${user.login.uuid}`}</p>
            <p>{`Username: ${user.login.username}`}</p>
            <p>{`Password: ${user.login.password}`}</p>
          </div>
        </section>
      )}
      {/* {userData
          .filter((user) => user.cell === id)
          .map((filteredUser) => (
            <div key={id} className="filteredUser-card">
              <div className="basic-info">
                <img src={filteredUser.picture.large} alt="user profile" />
                <p>{filteredUser.name.first + ' ' + filteredUser.name.last}</p>
                <p>{filteredUser.email}</p>
                <p>{`📞 ${filteredUser.cell}`}</p>
              </div>
              <div className="user-details">
                <h2>Other Information</h2>
                <p>{`Address: ${filteredUser.location.street.name}, ${filteredUser.location.city}, ${filteredUser.location.state}, ${filteredUser.location.country}, ${filteredUser.location.postcode}`}</p>
                <p>{`UUID: ${filteredUser.login.uuid}`}</p>
                <p>{`Username: ${filteredUser.login.username}`}</p>
                <p>{`Password: ${filteredUser.login.password}`}</p>
              </div>
            </div>
          ))} */}
    </>
  );
};

export default UserDetails;
