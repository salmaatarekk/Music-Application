import React from "react";
import Form from "./common/form";
import Axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify//dist/react-toastify.css';
// import  Joi  from 'joi-browser';

class LogInForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  // schema = {
  //     username : Joi.string().required().label('Username'),
  //     password : Joi.string().required().label('Password')
  // }
  handleLogin = async (event) => {
    event.preventDefault();
    const userEmail = this.state.data.username;
    const userPassword = this.state.data.password;
    const { data } = await Axios.get(
      `http://localhost:5000/searchForUsers/'${userEmail}'/'${userPassword}' `
    );
    console.log(data.length);
    if (data.length > 0) {
      //Redirect to home page
    }
    else
    {
      toast("Incorrect Username or Password");
    }
  };
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form>
          {this.renderInput("username", "Username", true)}
          {this.renderInput("password", "Password", false, "password")}
          {this.renderCheckBox()}
          <button onClick={this.handleLogin} className="btn btn-primary">
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
