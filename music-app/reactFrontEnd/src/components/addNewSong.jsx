import React from "react";
import Form from "./common/form";
import axios from "axios";
import Joi from "joi-browser";
class AddNewSong extends Form {
  state = {
    data: {
      name: "",
      albumName: "",
      artistName: "",
    },
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("Name"),
    albumName: Joi.string().required().label("Album Name"),
    artistName: Joi.string().required().label("Artist Name"),
  };
  doSubmit = () => {
   
    const { name, albumName, artistName } = this.state.data;

    const newSongName = name;
    const newSongAlbum = albumName;
    const newSongArtist = artistName;

    console.log("name", newSongName);
    console.log("album", newSongAlbum);
    console.log("artist", newSongArtist);

    axios.post("http://localhost:5000/createNewSong", {
      newSongTitle: newSongName,
      newSongAlbumName: newSongAlbum,
      newSongArtistName: newSongArtist,
    });
    window.location = "/";
  };
  render() {
    return (
      <div>
        <h1>Add New Song</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", true)}
          {this.renderInput("albumName", "Album Name", false)}
          {this.renderInput("artistName", "Artist Name", false)}
          {this.renderButton("ADD")}
        </form>
      </div>
    );
  }
}

export default AddNewSong;
