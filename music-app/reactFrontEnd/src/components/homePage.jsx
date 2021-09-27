import React, { Component } from "react";
import axios from 'axios';
class HomePage extends Component {
  state = {
    songs: []
  };
  async componentDidMount() {
    const {data : songs} = await axios.get('http://localhost:5000/music/songs');
    console.log(songs);
    this.setState({ songs });
  }
  
  render() {
    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Song's number </th>
            <th scope="col">Song's name </th>
            <th scope="col">Artist's name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.songs.map( (col) => (
            <tr key = {col.id} >
              <th scope="row"> {col.id} </th>
              <td>{col.title}</td>
              <td> {col.name} </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default HomePage;
