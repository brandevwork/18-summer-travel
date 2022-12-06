import React, { useState } from 'react';
import Button from '../UI/Button';


function PickKid(props)	{
	const [familyMember, setFamilyMemeber] = useState(0)
	
	const selectMemberHandler = (e) => {
		setFamilyMemeber(e.target.value)
	}

	const nextHandler = (e) => {
		if(familyMember !== 0)
			props.nextClickHandler('after_kid',{"family_member": familyMember})
	}

	return (
		<div>
  	<p>How Many people Kids/Adults are you travelling with</p>
  		<select onChange={selectMemberHandler}>
  			<option>Pick One</option>
  			<option value="2">2</option>
  			<option value="3">3</option>
  			<option value="4">4</option>
  			<option value="5">5</option>
  			<option value="6">6</option>
  			<option value="7">7</option>
  			<option value="8">8</option>
  			<option value="9">9</option>
  			<option value="10">10</option>
  		</select>
  		<Button title="Next" buttonClickHandler={nextHandler}/>
  	</div>
	)
}

export default PickKid;