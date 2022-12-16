import React from 'react';
import Button from '../UI/button';

function SaveBeforeSignup({nextClickHandler})	{
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => nextClickHandler('confirmAge')}/>
  		<p>Lets Just save this now</p>
  		<Button title="Next" buttonClickHandler={() => nextClickHandler('signupSection')}/>
  	</div>
	)
}

export default SaveBeforeSignup;