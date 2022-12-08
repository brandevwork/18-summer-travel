import React from 'react';
import Button from '../UI/Button';


function SaveBeforeSignup(props)	{
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => props.nextClickHandler('confirm_age')}/>
  		<p>Lets Just save this now</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('signup_section')}/>
  	</div>
	)
}

export default SaveBeforeSignup;