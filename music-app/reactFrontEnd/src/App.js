import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import HomePage from './components/homePage';
import LogInForm from './components/loginForm';
import Logout from './components/logout';
import RegisterForm from './components/registerForm';
import NavBar from './components/navbar';
import UserProfile from './components/common/userProfile';
import AddNewSong from './components/addNewSong';
import './App.css';

class App extends React.Component {
  state = {
  }

  componentDidMount() {

    try{
    const jwt =  localStorage.getItem("token"); // JSON web token
    const user = JSON.parse(jwt);
    console.log("user", user);
    this.setState({user});
    }
    catch(err){
     console.log("error ",  err);
    }
     
    //  console.log("type", typeof(user));
    //  console.log("user", user);
   
  }
  render() {
    return (
       <React.Fragment>
         <NavBar user = {this.state.user} />
          
           <main className = "container">
            <Switch>
            <Route path="/homePage" component={HomePage} />
            <Route path = "/newSong" component = {AddNewSong} />
            <Route path="/login" component = {LogInForm} />
            <Route path="/logout" component = {Logout} />
            <Route path = "/userProfile" 
            render= { props => <UserProfile user = {this.state.user} /> }
            />
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


