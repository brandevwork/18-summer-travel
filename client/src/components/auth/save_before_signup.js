import React from 'react';
import Button from '../UI/Button';


function SaveBeforeSignup(props)	{
	return (
		<div>
  		<p>Lets Just save this now</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('signup_section')}/>
  	</div>
	)
}

export default SaveBeforeSignup;