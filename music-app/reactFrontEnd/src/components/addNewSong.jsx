import React from "react";
import Form from "./common/form";
import axios from "axios";

class AddNewSong extends Form{
state = {
    data : {
    name : "", 
    albumName : "",
    artistName : ""
    }
}
  handleADD = (event) =>{
    event.preventDefault();
    const {name, albumName, artistName} = this.state.data;

    const newSongName = name;
    const newSongAlbum = albumName;
    const newSongArtist = artistName;
    
    console.log("name", newSongName);
    console.log("album", newSongAlbum);
    console.log("artist", newSongArtist);

    axios.post('http://localhost:5000/createNewSong', {
        newSongTitle : newSongName,
        newSongAlbumName : newSongAlbum,
        newSongArtistName : newSongArtist 
    } )
    window.location = '/';
  }  
  render() {
    return (
      <div>
        <h1>Add New Song</h1>
        {this.renderInput("name", "Name", true)}
        {this.renderInput("albumName", "Album Name", false)}
        {this.renderInput("artistName", "Artist Name", false)}
        <button onClick = {this.handleADD} className = "btn btn-primary" >ADD</button>
      </div>
    );
  }
}

export default AddNewSong;
