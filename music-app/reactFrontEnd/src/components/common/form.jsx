import React, { Component } from 'react';
import Input from './input';
// import  Joi  from 'joi-browser';

class Form extends Component {

    state = {
        data : {},
        errors : {}
    };
    

    renderButton(label) {
        return <button 
        className="btn btn-primary">{label}</button>
    }

    renderInput(name, label,  autoFocus, type = "text"){
        const {data, errors} = this.state;
        return(
        <Input
        type = {type}
        name = {name}
        value = {data[name]}
        label = {label}
        onChange = {this.handleChange} 
        autoFocus = {autoFocus} 
        error = {errors[name]}
        />  
        );
    }
    
    
}
 
export default Form;