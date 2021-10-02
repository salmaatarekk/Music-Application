import React from 'react';
import From from './common/form';
import axios from 'axios';
import  Joi  from 'joi-browser';

class RegisterForm extends From {
    state = {
        data : {username : "", password : "", name: ""},
        errors : {}
    }
    schema = {
        username : Joi.string().required().email().label('Username'),
        password : Joi.string().required().min(3).label('Password'),
        name: Joi.string().required().label('Name')
    }
   doSubmit =  () => {
       
     //  console.log(this.state.data.username);
       const UserEmail = this.state.data.username;
       const UserPassword = this.state.data.password;
       const UserName = this.state.data.name;
       const Admin = false;
       console.log( 'email', UserEmail );
       console.log( 'password', UserPassword );
       console.log( 'name', UserName ); 

         axios.post('http://localhost:5000/createNewUser', {
        newUserEmail : UserEmail,
        newUserPassword : UserPassword,
        newUserName : UserName,
        isAdmin : Admin
       } );
       window.location = '/login';

   };
    render() { 
        return (

            <div>
                <h1>Register</h1>
                
                <form onSubmit = {this.handleSubmit} >
                
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