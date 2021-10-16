import React from "react";
import axios from "axios";

class Header extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    let data = await axios.get(
      `http://localhost:5000/renderImage/unnamed.jpg`
    );
    data = data.data;
    console.log("data", data); 
    this.setState({data});

  }


  render() {
    
      try {
        require('//upload//unnamed.jpg');
        console.log('found');
      } catch (err) {
        console.log('not found');
      }
    
    return <img src={'/upload/unnamed.jpg'} alt = {'Display img'} />;
  }
}

export default Header;
