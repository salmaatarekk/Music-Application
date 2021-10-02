import React, { Component } from "react";
import Input from "./input";
import CheckBox from "./checkbox";
import  Joi  from 'joi-browser';
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = {abortEarly : false};
    
    const {error} = Joi.validate(this.state.data, this.schema, options);
    if(!error)
    return null;
    const errors = {};
    for(let item of error.details)
    errors[item.path[0]] = item.message;
    
    return errors;    
    
  };
  handleSubmit = e => {
    e.preventDefault();
    // call the server
    const errors = this.validate();
    this.setState( {errors : errors || {} });
    if(errors)
    return;
    this.doSubmit();   
    
  };
  validateProperty = ({name, value}) => {
    const obj = { [name] : value}; 
    const schema = { [name] : this.schema[name] }  
    const {error} = Joi.validate(obj, schema );
    if(error)
    
    return error ? error.details[0].message : null;
    
  };
  handleChange = ({currentTarget : input}) =>{
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage)
    errors[input.name] = errorMessage;
    else
    delete errors[input.name];
    
    const data = {...this.state.data};
    data[input.name] = input.value;
    
    this.setState( {data, errors} );
  };
  // handleChecked = (e) =>{
  //   const data = {...this.state.data};
  //   data[e.currentTarget.checked] = (e.currentTarget.checked) ;
  //   this.setState({data});
  //   console.log(data); 
    
  // }
  
  renderButton(label) {
    return <button
    disabled = {this.validate()}
    className="btn btn-primary">{label}</button>;
  }

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
    return <CheckBox
    />;
  }
}

export default Form;
