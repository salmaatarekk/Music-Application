import React from "react";

class UserProfile extends React.Component {
  state = {};

  render() {
    const { user } = this.props;
    return (
        <form className ="form-floating">
        <label  for="floatingInputValue">User Email</label> 
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value={user.email} />

        <label for="floatingInputValue">User Name</label> 
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value={user.name} />

        <label for="floatingInputValue">User ID</label> 
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value={user.id} />
       
        </form>
    );
  }
}

export default UserProfile;
