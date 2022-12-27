import React from 'react';

const homeReducer = (state, action) => {
  let errors = [];
  if (action.type == 'SERVER_ERROR') {
  	errors.push(action.errorMessage);
  	return {
      familyError: typeof action.familyError !== 'undefined' ? action.familyError :false,
      resultError: typeof action.resultError !== 'undefined' ? action.resultError :false,
      recomendationError: typeof action.recomendationError !== 'undefined' ? action.recomendationError :false,
      surveyError: typeof action.surveyError !== 'undefined' ? action.surveyError :false,
      questionSavedError: typeof action.questionSavedError !== 'undefined' ? action.questionSavedError :false,
      resetError: typeof action.resetError !== 'undefined' ? action.resetError :false,
      activeError: typeof action.activeError !== 'undefined' ? action.activeError :false,
      errorMessage: errors
    }
  }
  else {
    return {
      familyError: false,
      resultError: false,
      recomendationError: false,
      surveyError: false,
      questionSavedError: false,
      resetError: false,
      activeError: false,
      errorMessage:[]
    }
  }
}

export default homeReducer;