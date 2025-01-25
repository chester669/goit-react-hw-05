import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
