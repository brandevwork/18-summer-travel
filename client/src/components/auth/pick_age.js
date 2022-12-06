import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';


function PickAge(props)	{
	let totalMembers = props.familyMemberState.family_member

	const renderNameAndYear = () => {
		<div>
			 <Input ref={props.cityRef} input={{"type":"text", "placeholder":"Name",
          "className":"form-control rounded input-lg text-center no-border"}}/>
        <Input ref={props.cityRef} input={{"type":"text", "placeholder":"Year",
          "className":"form-control rounded input-lg text-center no-border"}}/>
		</div>
	}
	return (
		<div>
  		<p>Age</p>
  		
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('confirm_age')}/>
  	</div>
	)
}

export default PickAge;