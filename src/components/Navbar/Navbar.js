import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <NavLink className="link" activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/users">
        Users
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/addresses">
        Address
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/404">
        Nowhere
      </NavLink>
    </div>
  );
};

export default Navbar;
