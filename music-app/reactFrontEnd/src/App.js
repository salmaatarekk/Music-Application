import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import HomePage from './components/homePage';
import LogInForm from './components/loginForm';
import Logout from './components/logout';
import RegisterForm from './components/registerForm';
import NavBar from './components/navbar';
import UserProfile from './components/common/userProfile';
import AddNewSong from './components/addNewSong';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'


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
   
  }
  render() {
    const {user} = this.state;
    return (
       <React.Fragment>
         <ToastContainer />
         <NavBar user = {this.state.user} />
          
           <main className = "container">
            <Switch>
            <Route path="/homePage"  render = {props => <HomePage  props = {props}  user = {user} />  }  />
            <Route path = "/newSong" component = {AddNewSong} />
            <Route path="/login" component = {LogInForm} />
            <Route path="/logout" component = {Logout} />
            <Route path = "/userProfile"  render= { props => <UserProfile props = {props} user = {user} /> } />
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


