import React from "react";


class CheckBox extends React.Component {
  render() {
    return (
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Admin
        </label>
      </div>
    );
  }
}

export default CheckBox;
