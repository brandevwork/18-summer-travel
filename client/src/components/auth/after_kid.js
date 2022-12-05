import React from 'react';
import Button from '../UI/Button';


function AfterKid(props)	{
	return (
		<div>
  		<p>I will ask</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('before_age')}/>
  	</div>
	)
}

export default AfterKid;