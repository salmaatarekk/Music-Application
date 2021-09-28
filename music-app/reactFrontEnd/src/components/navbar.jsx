import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div  >
      <nav className="nav">
      <a className="nav-link active" href="/homePage">Home</a>
      <a className="nav-link" href="/login">Login</a>
      <a className="nav-link" href="/register">Register</a>
    </nav>
    </div>
    );
  }
}

export default NavBar;
