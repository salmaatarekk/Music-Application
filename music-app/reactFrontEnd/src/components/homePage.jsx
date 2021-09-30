import React, { Component } from "react";
import axios from 'axios';
import {withRouter} from 'react-router'
class HomePage extends Component {
  state = {
    songs: []
  };
  async componentDidMount() {
    const {data : songs} = await axios.get('http://localhost:5000/music/songs');
    this.setState({ songs });
    console.log("songs", songs);
  }
  handleNewSong = () =>{
    this.props.history.push('/newSong');
  }
  
  render() {
    return (
      <React.Fragment>
       <button onClick = {this.handleNewSong}  className="btn btn-danger" >New Song</button> 
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Song's number </th>
            <th scope="col">Song's name </th>
            <th scope="col">Artist's name</th>
            <th scope ="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.songs.map( col => (
            <tr key = {col.id} >
              <th scope="row"> {col.id} </th>
              <td>{col.title}</td>
              <td> {col.artistName} </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default HomePage;