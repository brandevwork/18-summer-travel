import React from 'react';

const loginReducer = (state, action) => {
  let errors = [];
  if (action.type == 'SERVER_ERROR') {
  	errors.push(action.errorMessage);
  	return {
      email: state.email,
      password: state.password,
      error: action.error,
      errorMessage: errors
    }
  }
  if (action.type == 'SUBMIT') {
    if (action.email.trim() === "") {
      errors.push("Email cannot be empty");
    }
    if (action.password.trim() === "") {
      errors.push("Password cannot be empty");
    }
    if (action.password.trim().length < 6) {
      errors.push("Password length cannot be less than 6 chracters");
    }
    if(errors.length > 0) {
      return {
        email: action.email,
        password: action.password,
        error: true,
        errorMessage: errors
      }
    }
    else {
      return {
        email: action.email,
        password: action.password,
        error: false,
        errorMessage: errors
      }
    }
  }
  else {
    return {
      email: "",
      password: "",
      error: false,
      errorMessage:[]
    }
  }
}

export default loginReducer;