import React, { Component } from "react";
import Input from "./input";
// import  Joi  from 'joi-browser';
import CheckBox from "./checkbox";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }
//   handleSubmit = e => {
//     e.preventDefault();
//     // call the server
//     const errors = this.validate();
//     this.setState( {errors : errors || {} });
//     if(errors)
//         return;
//      this.doSubmit();   
        
// };
handleChange = ({currentTarget : input}) =>{
    

    const data = {...this.state.data};
    data[input.name] = input.value;
    this.setState( {data} );
};

  renderInput(name, label, autoFocus, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        autoFocus={autoFocus}
        error={errors[name]}
      />
    );
  }

  renderCheckBox() {
    return <CheckBox />;
  }
}

export default Form;
