import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5" style={{ backgroundColor: "#6050DC" }}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bold">Welcome to Fitness & Co</h1>
          <p className="lead fw-normal text-white-75 mb-4">
            Discover the latest fitness apparel and accessories designed for your lifestyle.
          </p>
          <Link
            to="/shop"
            className="btn btn-light btn-lg rounded-pill px-4 py-2 fw-semibold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
