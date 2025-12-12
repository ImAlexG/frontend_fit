import React, {  useContext } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavLinks = () => {

  const { isAuthenticated, setIsAuthenticated, username } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("access");
    setIsAuthenticated(false);
  }

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {isAuthenticated ? (
            <>
            <li className="nav-item">
              <RRNavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link fw-semibold"
                }
              >
                {`Hi ${username}`}
              </RRNavLink>
            </li>

            <li className="nav-item" onClick={logout}>
              <RRNavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link fw-semibold"
                }
              >
                Logout
              </RRNavLink>
            </li>
            </>
      ) : (
            <>
            <li className="nav-item">
        <RRNavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active fw-semibold" : "nav-link fw-semibold"
          }
        >
          Login
        </RRNavLink>
      </li>

      <li className="nav-item">
        <RRNavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "nav-link active fw-semibold" : "nav-link fw-semibold"
          }
        >
          Register
        </RRNavLink>
      </li>
            </>
      )}
    </ul>
  );
};

export default NavLinks;