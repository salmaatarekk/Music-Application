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
      selectedImage : null ,
    },
    errors: {}, 
  };
  schema = {
    name: Joi.string().required().label("Name"),
    albumName: Joi.string().required().label("Album Name"),
    artistName: Joi.string().required().label("Artist Name"),
    selectedImage : Joi.any().label('Image'),
  };
  handleSelectImage = (event) => {
    // console.log(event.target.files[0]);
    const data = {...this.state.data};
    data.selectedImage = event.target.files[0];
    // console.log("data", data.selectedImage);
    this.setState({data});
    
    //  console.log("yasater", this.state.selectedImage);
  }
  doSubmit = () => {
   
    const { name, albumName, artistName, selectedImage } = this.state.data;

    const newSongTitle = name;
    const newSongAlbumName = albumName;
    const newSongArtistName = artistName;
    const newSongImage = selectedImage;

    
    
   
    const formData = new FormData();
    formData.append("image", newSongImage);
    formData.append("name", newSongTitle);
    formData.append("artist", newSongArtistName);
    formData.append("album", newSongAlbumName);
        
    axios.post('http://localhost:5000/createNewSong', formData, {
              headers: { "Content-Type": "multipart/form-data" },
    });

    window.location = "/";
  };
  render() {
    return (
      <React.Fragment>
        <h1>Add New Song</h1>
        <input type = 'file' name = "image" accept = "image/*" multiple = {false} onChange = {this.handleSelectImage} />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", true)}
          {this.renderInput("albumName", "Album Name", false)}
          {this.renderInput("artistName", "Artist Name", false)}
          {this.renderButton("ADD")}
        </form>
      </React.Fragment>
    );
  }
}

export default AddNewSong;
