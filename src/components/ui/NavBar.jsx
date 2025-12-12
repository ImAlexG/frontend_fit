
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import styles from "./NavBar.module.css";
import NavLinks from "./NavLink";

const NavBar = ({numCartItems}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNav}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          FITNESS & CO
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            
          </ul>

          <NavLinks />

          <Link
            to="/cart"
            className={`btn btn-dark ms-3 rounded-pill position-relative ${styles.cartBtn}`}
          >
            <FaCartShopping />
            {numCartItems == 0 || <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.7rem" }}
            >
              {numCartItems}
            </span>
            }
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
