import React from "react";
import Form from "./common/form";
import setItemInLocalStorage from "./common/localStorage";
import Axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class LogInForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(3).label("Password"),
  };

  doSubmit = async () => {
    const userEmail = this.state.data.username;
    const userPassword = this.state.data.password;
    const { data } = await Axios.get(
      `http://localhost:5000/searchForUsers/'${userEmail}'/'${userPassword}' `
    );

    if (data.length > 0) {
      setItemInLocalStorage("token", data);
      
    } else {
      toast.error("Incorrect Username or Password");
    }
  };
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", true)}
          {this.renderInput("password", "Password", false, "password")}
          {this.renderCheckBox()}
          {this.renderButton("Login")}
        </form>
        <a className="link" href="/register">
          Doesn't have an account yet!
        </a>
      </div>
    );
  }
}

export default LogInForm;
