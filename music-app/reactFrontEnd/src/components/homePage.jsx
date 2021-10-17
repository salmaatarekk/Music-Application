import React, { Component } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import SongCard from "./common/songCard";
import { chunk } from 'lodash';
import { Container, Row, Col} from "react-bootstrap";


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
  //  chunk = (arr, chunkSize = 1, cache = []) => {
  //   const tmp = [...arr]
  //   if (chunkSize <= 0) return cache
  //   while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  //   return cache;
  // }
  
  render() {
    const {user} = this.props; 
    const arrangedSongs = chunk(this.state.songs, 3);
    console.log("bb", arrangedSongs);
    return (
      <React.Fragment>
        {user && <Button variant = 'contained' onClick = {this.handleNewSong}  className="btn btn-danger m-2 ">New Song</Button> }
        {
          
           arrangedSongs.map( (Songs, index) => {
          const columns = Songs.map( (Song, index) => {
            return (
              <Col xs="4" key={Song.id}>
              <SongCard
               SongName = {Song.title} 
               ArtistName = {Song.artistName}
               SongID = {Song.id}
               ImageName = {Song.image}
               User = {user}
                />
                </Col>
            );

          });
           return <Row key = {index}>{columns}</Row> ;
          } )

        
      }
      </React.Fragment>
    );
  }
}

export default HomePage;