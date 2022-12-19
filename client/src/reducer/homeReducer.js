import React from 'react';

const homeReducer = (state, action) => {
  let errors = [];
  if (action.type == 'SERVER_ERROR') {
  	errors.push(action.errorMessage);
  	return {
      family_members: state.family_members,
      error: action.error,
      errorMessage: errors
    }
  }
  else {
    return {
      family_members: state.family_members,
      error: false,
      errorMessage:[]
    }
  }
}

export default homeReducer;