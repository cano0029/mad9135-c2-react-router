import { useParams } from 'react-router-dom';
import './userDetails.css';

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
    </>
  );
};

export default UserDetails;
