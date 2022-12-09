import React from 'react';
import Button from '../UI/Button';


function AskFamily(props)	{
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => props.nextClickHandler('ask_user_firstname')}/>
  		<p>{`Hello ${props.familyMemberState.first_name} I will ask about Your family`}</p>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('pick_kid')}/>
  	</div>
	)
}

export default AskFamily;