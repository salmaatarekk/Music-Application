import React, { Component } from "react";
import axios from 'axios';


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
    // this.props.history.push('/newSong');
    window.location = '/newSong';
  }
  handleDelete =  ( id ) =>{
     axios.delete(`http://localhost:5000/DeleteSong/'${id}'`);
    window.location.reload();
  }
  
  render() {
    const {user} = this.props; 
    return (
      <React.Fragment>
        {user && <button onClick = {this.handleNewSong}  className="btn btn-danger" >New Song</button> }
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
              { user && <button onClick = { () => this.handleDelete(col.id) } className = "btn btn-danger">Delete</button> }
            </tr>
          ))}
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default HomePage;