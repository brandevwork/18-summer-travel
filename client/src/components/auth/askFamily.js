import React from 'react';
import Button from '../UI/button';

function AskFamily({nextClickHandler, familyMemberState: {first_name}})	{
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => nextClickHandler('askUserFirstname')}/>
  		<p>{`Hello ${first_name} I will ask about Your family`}</p>
  		<Button title="Next" buttonClickHandler={() => nextClickHandler('pickKid')}/>
  	</div>
	)
}

export default AskFamily;