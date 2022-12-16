import React, { useRef } from 'react';
import Button from '../UI/button';

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function ConfirmAge({familyMemberState: {family_member, family_members}, nextClickHandler})	{
	const nameRef =  useRef([])
	const yearRef =  useRef([])

	let totalMembers = family_member
	let totalMembersData = family_members
	const renderNameAndYear = () => {
		let content = [];
		for(let i = 0; i < totalMembers; i++) {
			content.push(
				<div style={{"display":"flex"}}>
			    <p ref={el => nameRef.current[i+1] = el} >{totalMembersData[i].name}</p>
			    <p ref={el => yearRef.current[i+1] = el} >{getAge(totalMembersData[i].birth_year)}</p>
			  </div> 
			)
		}
		return content   
	}
	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => nextClickHandler('pickAge')}/>
  		<p>Are these Dates are correct</p>
  		{renderNameAndYear ()}
  		<Button title="Next" buttonClickHandler={() => nextClickHandler('saveBeforeSignup')}/>
  	</div>
	)
}

export default ConfirmAge;