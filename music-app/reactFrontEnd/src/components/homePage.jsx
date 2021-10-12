import React, { Component } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import SongCard from "./common/songCard";

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
  
  render() {
    const {user} = this.props; 
    return (
      <React.Fragment>
        {user && <Button variant = 'contained' onClick = {this.handleNewSong}  className="btn btn-danger m-2 ">New Song</Button> }
      {
        this.state.songs.map(c => (
          <SongCard
           SongName = {c.title} 
           ArtistName = {c.artistName}
           SongID = {c.id}
           SongImage = {c.image}
           User = {user}
            />
        ))
      }
      </React.Fragment>
    );
  }
}

export default HomePage;