import React, { Component } from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div  >
      <nav className="nav">
      <a className="nav-link active" aria-current="page" href="#">Active</a>
      <a className="nav-link" href="#">Link</a>
      <a className="nav-link" href="#">Link</a>
      <a className="nav-link disabled">Disabled</a>
    </nav>
    </div>
    );
  }
}

export default NavBar;
