import React from 'react';

const signupReducer = (state, action) => {  
  let errors = [];
  if (action.type == 'SERVER_ERROR') {
    errors.push(action.errorMessage);
    return {
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        password: action.password,
        street: action.street,
        city: action.city,
        state: action.state,
        country: action.country,
        zip: action.zip,
      error: action.error,
      errorMessage: errors
    }
  }
  if (action.type == 'SUBMIT') {
    if (action.firstname.trim() === "") {
      errors.push("First name cannot be empty");
    }
    if (action.lastname.trim() === "") {
      errors.push("Last name cannot be empty");
    }
    if (action.email.trim() === "") {
      errors.push("Email cannot be empty");
    }
    if (action.password.trim() === "") {
      errors.push("Password cannot be empty");
    }
    if (action.password.trim().length < 6) {
      errors.push("Password length cannot be less than 6 chracters");
    }
    if (action.street.trim() === "") {
      errors.push("Street cannot be empty");
    }
    if (action.city.trim() === "") {
      errors.push("City cannot be empty");
    }
    if (action.state.trim() === "") {
      errors.push("State cannot be empty");
    }
    if (action.country.trim() === "") {
      errors.push("Country cannot be empty");
    }
    if (action.zip.trim() === "") {
      errors.push("Zip cannot be empty");
    }
    if(errors.length > 0) {
      return {
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        password: action.password,
        street: action.street,
        city: action.city,
        state: action.state,
        country: action.country,
        zip: action.zip,
        error: true,
        errorMessage: errors
      }
    }
    else {
      return {
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        password: action.password,
        street: action.street,
        city: action.city,
        state: action.state,
        country: action.country,
        zip: action.zip,
        error: false,
        errorMessage: errors
      }
    }
  }
  else {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      error: false,
      errorMessage:[]
    }
  }
}

export default signupReducer;