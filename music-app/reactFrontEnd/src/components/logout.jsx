import React from 'react';
import { removeFromLocalStorage } from './common/localStorage';

class Logout extends React.Component {
    componentDidMount() {
        removeFromLocalStorage("token");
    }

    render() { 
        return null;
    }
}
 
export default Logout;