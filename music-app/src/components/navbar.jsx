import React, { Component } from "react";

class NavBar extends React.Component {
  render() {
    return (
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="/songs">Songs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/likes">Likes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signIn">Sign in</a>
        </li>
        
      </ul>
    );
  }
}

export default NavBar;
