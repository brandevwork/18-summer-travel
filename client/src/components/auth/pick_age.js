import React from 'react';
import Button from '../UI/Button';


function PickAge(props)	{
	return (
		<div>
  		<p>Age</p>
  		
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('confirm_age')}/>
  	</div>
	)
}

export default PickAge;