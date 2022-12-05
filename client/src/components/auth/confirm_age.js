import React from 'react';
import Button from '../UI/Button';


function ConfirmAge(props)	{
	return (
		<div>
  		<p>Are these Dates are correct</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('save_before_signup')}/>
  	</div>
	)
}

export default ConfirmAge;