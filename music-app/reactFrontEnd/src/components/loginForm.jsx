import React from 'react';

class LogInForm extends React.Component {
    render() { 
        return(
            <div>
            <h1>Login Form</h1>
            <form>
            <div className = "mb-3" >
            <label className="form-label" >UserName</label> 
            <input type ="email"  className="form-control" />  
            </div>       
             </form> 
            </div> 
            
            );
    }
}
 
export default LogInForm;