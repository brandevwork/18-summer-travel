import React from 'react';
import Button from '../UI/button';

function AskUser({nextClickHandler})	{
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => nextClickHandler('welcome')}/>
  		<p>I will ask About Your Name</p>
  		<Button title="Next" buttonClickHandler={() => nextClickHandler('askUserFirstname')}/>
  	</div>
	)
}

export default AskUser;