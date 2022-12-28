import React from 'react';

const signupReducer = (state, action) => {
  let regex = /^[a-zA-Z ]*$/;  
  let errors = [];
  if (action.type == 'SERVER_ERROR') {
    errors.push(action.errorMessage);
    return {
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        password: action.password,
        // street: action.street,
        address: action.address,
        city: action.city,
        state: action.state,
        country: action.country,
        zip: action.zip,
      error: action.error,
      errorMessage: errors
    }
  }
  let allFieldsMissing = false
  let checkMiss = false
  if (action.type == 'SUBMIT') {
    if (action.firstname.trim() === "") {
      checkMiss=true 
      // errors.push("First name cannot be empty");
    }
    if (action.firstname.trim() !== "") {
      if(!regex.test(action.firstname.trim())){
        errors.push("Only alphabets allowed in first name");
      }
    }
    if (action.lastname.trim() === "") {
      checkMiss=true
      // errors.push("Last name cannot be empty");
    }
    if (action.lastname.trim() !== "") {
      if(!regex.test(action.lastname.trim())){
        errors.push("Only alphabets allowed in last name");
      }
    }
    if (action.email.trim() === "") {
      checkMiss=true
      // errors.push("Email cannot be empty");
    }
    if (action.password.trim() === "") {
      checkMiss=true
      // errors.push("Password cannot be empty");
    }
    if(action.password.trim() !== "") {
      if (action.password.trim().length < 6) {
        errors.push("Password length cannot be less than 6 chracters");
      }
    }
    if (action.address.trim() === "") {
      checkMiss=true
      // errors.push("Address cannot be empty");
    }
    // if (action.street.trim() === "") {
    //   errors.push("Street cannot be empty");
    // }
    if (action.city.trim() === "") {
      checkMiss=true
      // errors.push("City cannot be empty");
    }
    if (action.state.trim() === "") {
      checkMiss=true
      // errors.push("State cannot be empty");
    }
    if (action.country.trim() === "") {
      checkMiss=true
      // errors.push("Country cannot be empty");
    }
    if (action.zip.trim() === "") {
      checkMiss=true
      // errors.push("Zip cannot be empty");
    }
    if(checkMiss) {
      // errors.push("Kindly fill All missing fields")
    }
    if(errors.length > 0) {
      return {
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        password: action.password,
        address: action.address,
        // street: action.street,
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
        address: action.address,
        // street: action.street,
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
      address: "",
      // street: "",
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