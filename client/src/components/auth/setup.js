import React from 'react';
import Button from '../UI/Button';


function Setup(props)	{
	return (
		<div>
  		<p>All Setup</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('ask_user_firstname')}/>
  	</div>
	)
}

export default Setup;