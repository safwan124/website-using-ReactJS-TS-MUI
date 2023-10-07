import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
            <a className="navbar-brand" href="/">
              <img src="../../images/logo.png" alt="logo" width={120} height={50}/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse links" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="link">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link to="/advertise" className="link">Advertise with Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="link">About US</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;