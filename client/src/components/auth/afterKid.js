import React from 'react';
import Button from '../UI/button';

function AfterKid({familyMemberState: {family_member}, nextClickHandler})	{
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => nextClickHandler('pickKid')}/>
  		<p>{`Wow So you are  ${family_member}`}</p>
  		<Button title="Next" buttonClickHandler={() => nextClickHandler('before_age')}/>
  	</div>
	)
}

export default AfterKid;