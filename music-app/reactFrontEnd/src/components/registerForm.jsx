import React, { Component } from 'react';
import From from './common/form';
import axios from 'axios';
import CheckBox from './common/checkbox';

class RegisterForm extends From {
    state = {
        data : {username : "", password : "", name: ""},
        errors : {}
    }
    // schema = {
    //     username : Joi.string().required().email().label('Username'),
    //     password : Joi.string().required().min(5).label('Password'),
    //     name: Joi.string().required().label('Name')
    // }
   handleRegister = (event) => {
       event.preventDefault();
       console.log(event.target.username.value) ;

   };
    render() { 
        return (

            <div>
                <h1>Register</h1>
                
                <form onSubmit = {this.handleRegister}>
                
                {this.renderInput('username', 'Username', true)}
                {this.renderInput('password', 'Password', false, 'password')}
                {this.renderInput('name', 'Name', false)}
                {this.renderCheckBox()}
                {this.renderButton('Register')}

                </form>   
            </div>

        ) ;
    }
}
 
export default RegisterForm;