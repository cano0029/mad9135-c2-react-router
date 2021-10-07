import { useParams } from 'react-router';

const UserDetails = ({ userData }) => {
  const { id } = useParams();

  return (
    <div className="user-details">
      <h1>Hello Im your user - {id}</h1>
      <section>
        {userData
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
          ))}
      </section>
    </div>
  );
};

export default UserDetails;
