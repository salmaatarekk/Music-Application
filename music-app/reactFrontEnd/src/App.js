import React from 'react';
import jwtDecode from 'jwt-decode';
import { Switch, Route, Redirect } from 'react-router';
import HomePage from './components/homePage';
import LogInForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import NavBar from './components/navbar';
import './App.css';

class App extends React.Component {
  state = {
    user : {}
  }

  componentDidMount() {
    const jwt =  localStorage.getItem("token"); // JSON web token
     const user = JSON.parse(jwt) ; 
    //  console.log("type", typeof(user));
    //  console.log("user", user);
   
  }
  render() {
     
    return (
       <React.Fragment>
         <NavBar />
          
           <main className = "container">
            <Switch>
            <Route path="/homePage" component={HomePage} />  
            <Route path="/login" component = {LogInForm} />
            <Route path = "/register" component = {RegisterForm} />
            <Redirect from= "/" exact to ="/homePage" />
            <Redirect to ='not-found' />
            </Switch>
          </main> 
          

       </React.Fragment>
    );
  }
}
 
export default App;


