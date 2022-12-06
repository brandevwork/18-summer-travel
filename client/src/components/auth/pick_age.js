import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';


function PickAge(props)	{
	let totalMembers = props.familyMemberState.family_member
	const renderNameAndYear = () => {
		let content = [];
		for(let i = 0; i < totalMembers-1; i++) {
			content.push(
				<div style={{"display":"flex"}}>
			    <Input  input={{"type":"text", "placeholder":"Name",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
			    <Input  input={{"type":"text", "placeholder":"Year",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
			  </div> 
			)
		}
		return content   
	}

	return (
		<div>
  		<p>Age</p>
  		<div style={{"display":"flex"}}>
  		<Input  input={{"type":"text", "value": [props.familyMemberState.first_name], "placeholder":"Name",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
	    <Input  input={{"type":"text", "placeholder":"Year",
	      "className":"form-control rounded input-lg text-center no-border"}}/>
	      </div>
  		{renderNameAndYear ()}
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('confirm_age')}/>
  	</div>
	)
}

export default PickAge;