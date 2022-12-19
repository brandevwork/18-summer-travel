import React from 'react';
import Button from '../UI/button';

function Welcome({nextClickHandler})	{

	return (
		<div>
  		<h1>Welcome</h1>
  		<p>I am Keekee</p>
  		<p>lorem ipsum lorem ipsum lorem ipsum
  		lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
  		<Button title="Next" buttonClickHandler={() => nextClickHandler('askUser')}/>
  	</div>
	)
}

export default Welcome;