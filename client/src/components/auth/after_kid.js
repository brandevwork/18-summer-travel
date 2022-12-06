import React from 'react';
import Button from '../UI/Button';


function AfterKid(props)	{
	return (
		<div>
  		<p>{`Wow So you are  ${props.familyMemberState.family_member}`}</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('before_age')}/>
  	</div>
	)
}

export default AfterKid;