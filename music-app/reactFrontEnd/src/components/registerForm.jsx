import React from 'react';
import From from './common/form';
import axios from 'axios';

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
       const UserEmail = event.target.username;
       const UserPassword = event.target.password;
       const UserName = event.target.name;
       const Admin = event.target.CheckBox.checked;
       console.log(UserEmail);
       axios.post('http://localhost:5000/createNewUser', {
        newUserEmail : UserEmail,
        newUserPassword : UserPassword,
        newUserName : UserName,
        isAdmin : Admin
       } )

   };
    render() { 
        return (

            <div>
                <h1>Register</h1>
                
                <form>
                
                {this.renderInput('username', 'Username', true)}
                {this.renderInput('password', 'Password', false, 'password')}
                {this.renderInput('name', 'Name', false)}
                {this.renderCheckBox()}
                <button  onClick = {this.handleRegister} className = "btn btn-primary">Register</button>

                </form>   
            </div>

        ) ;
    }
}
 
export default RegisterForm;