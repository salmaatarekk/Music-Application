import React from "react";
import axios from "axios";
import { StyleSheet } from 'react-router-dom';
import "../styles.css";


class Header extends React.Component {
  state = {
    data: {},
    defaultImageName: "unnamed.jpg",
  };

  async componentDidMount() {
    const name = this.props.imageName;
    let data = await axios.get(
      `http://localhost:5000/renderImage/${name || this.state.defaultImageName}`
    );
    data = data.data;
    console.log("data", data);
    this.setState({ data });
  }

  render() {
    return <img className = "image" src={this.state.data} alt={"Display img"} />;
  }
}

export default Header;
