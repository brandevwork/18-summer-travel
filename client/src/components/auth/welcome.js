import React from 'react';
import Button from '../UI/Button';

function Welcome(props)	{

	return (
		<div>
  		<h1>Welcome</h1>
  		<p>I am Keekee</p>
  		<p>lorem ipsum lorem ipsum lorem ipsum
  		lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('ask_user')}/>
  	</div>
	)
}

export default Welcome;