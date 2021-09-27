import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import React from 'react';
import { Switch } from 'react-router';
import HomePage from './components/homePage';

class App extends React.Component {
  render() { 
    return (
       <React.Fragment>
         <NavBar />
          <HomePage />
          {
          /* <main className = "container">
            <Switch>
            <Route path="/register" component={Register} />  

            </Switch>
          </main> */
          }

       </React.Fragment>
    );
  }
}
 
export default App;


