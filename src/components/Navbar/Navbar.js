import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/users">
        Users
      </NavLink>
      <NavLink activeClassName="active" to="/addresses">
        Address
      </NavLink>
      <NavLink activeClassName="active" to="/404">
        Nowhere
      </NavLink>
    </div>
  );
};

export default Navbar;
