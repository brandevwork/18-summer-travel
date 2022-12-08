import React from 'react';
import Button from '../UI/Button';


function BeforeAge(props)	{
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => props.nextClickHandler('after_kid')}/>
  		<p>Greate so you are</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('pick_age')}/>
  	</div>
	)
}

export default BeforeAge;