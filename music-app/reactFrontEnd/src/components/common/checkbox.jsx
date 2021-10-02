import React from "react";

const CheckBox = ( ) =>  {
  
    return (
      <div className="form-check">
        <input type="checkbox" className="form-check-input filled-in" id="new3"  />
        <label
          className="form-check-label small text-uppercase card-link-secondary"
          for="new3"
        >
          Admin
        </label>
      </div>
    );
  
}

export default CheckBox;
