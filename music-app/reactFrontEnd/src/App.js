import './App.css';
import NavBar from './components/navbar';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import HomePage from './components/homePage';
import LogInForm from './components/loginForm';

class App extends React.Component {
  render() { 
    return (
       <React.Fragment>
         <NavBar />
          
           <main className = "container">
            <Switch>
            <Route path="/homePage" component={HomePage} />  
            <Route path="/login" component = {LogInForm} />
            <Redirect from= "/" exact to ="/homePage" />
            <Redirect to ='not-found' />
            </Switch>
          </main> 
          

       </React.Fragment>
    );
  }
}
 
export default App;


