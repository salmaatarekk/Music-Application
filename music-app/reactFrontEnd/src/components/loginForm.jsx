import React from "react";
import Form from "./common/form";
import setItemInLocalStorage from './common/localStorage';
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (data.length > 0) {
    setItemInLocalStorage("token", data);
    //console.log("data", data[0]);
    } else {
      // Doesn't work

      <div class="alert alert-primary" role="alert">
         Incorrect Username or Password!
      </div>;
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
        <a className="link" href="/register">
          Doesn't have an account yet!
        </a>
      </div>
    );
  }
}

export default LogInForm;
