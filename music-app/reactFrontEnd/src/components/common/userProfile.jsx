import React from "react";

class UserProfile extends React.Component {
    state ={
        

    }
    

    render() { 
        const {user} = this.props;
        return (
        <div>
            <h1>{user.name}</h1>
        </div>
        );
    }
}
 

export default UserProfile;
