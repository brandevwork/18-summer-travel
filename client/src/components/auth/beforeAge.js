import React from 'react';
import Button from '../UI/button';

function BeforeAge({nextClickHandler})	{
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => nextClickHandler('afterKid')}/>
  		<p>Greate so you are</p>
  		<Button title="Next" buttonClickHandler={() => nextClickHandler('pickAge')}/>
  	</div>
	)
}

export default BeforeAge;