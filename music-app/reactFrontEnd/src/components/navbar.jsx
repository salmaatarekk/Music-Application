import React from "react";

const NavBar = ({user}) => {
  return (
    
    <div>
      
      <nav className="nav">
        <a className="nav-link active" href="/homePage">
          Home
        </a>
        { !user && (
          <React.Fragment>
            <a className="nav-link" href="/login">
              Login
            </a>
            <a className="nav-link" href="/register">
              Register
            </a>
          </React.Fragment>
        )}
        { user && (
          <React.Fragment>
            <a className="nav-link" href="/userProfile">
              {user.name}
            </a>
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </React.Fragment>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
