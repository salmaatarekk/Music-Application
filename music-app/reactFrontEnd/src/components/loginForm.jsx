import React from 'react';
import Form from './common/form';
import  Joi  from 'joi-browser';


class LogInForm extends Form {
    state = {

    }
    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    }

    render() { 
        return(
            <div>
            <h1>Login Form</h1>
            <form>
            {this.renderInput('username', 'Username', true)}
            {this.renderInput('password', 'Password', false, 'password' ) }
            {this.renderButton("Login")}  
            </form> 
            </div> 
            
            );
    }
}
 
export default LogInForm;