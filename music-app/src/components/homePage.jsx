import React, { Component } from "react";
import getSongs from "../DB/getSongs";
class HomePage extends Component {
  state = {
    songs: [
      {
        id: 1,
        name: "tamaly maak",
        author: "amr Diab",
      },
    ],
  };
  
  render() {
    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Songs's number </th>
            <th scope="col">Song's name </th>
            <th scope="col">Author's name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.songs.map((col) => (
            <tr key = {col.id} >
              <th scope="row"> {col.id} </th>
              <td>{col.name}</td>
              <td> {col.author} </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default HomePage;
