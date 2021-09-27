import React from 'react';
import Form from './common/form';
class LogInForm extends Form {
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