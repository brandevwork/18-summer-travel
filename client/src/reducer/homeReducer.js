import React from 'react';

const homeReducer = (state, action) => {
  let errors = [];
  if (action.type == 'SERVER_ERROR') {
  	errors.push(action.errorMessage);
  	return {
      familyError: typeof action.familyError !== 'undefined' ? action.familyError :false,
      surveyError: typeof action.surveyError !== 'undefined' ? action.surveyError :false,
      questionSavedError: typeof action.questionSavedError !== 'undefined' ? action.questionSavedError :false,
      errorMessage: errors
    }
  }
  else {
    return {
      familyError: false,
      surveyError: false,
      questionSavedError: false,
      errorMessage:[]
    }
  }
}

export default homeReducer;