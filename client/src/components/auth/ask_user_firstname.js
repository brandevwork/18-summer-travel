import React, { useRef, useEffect } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

function AskUserFirstName(props)	{
	let first_name = props.familyMemberState.first_name
	const firstnameRef = useRef()

	const nextHandler = (e) => {
		if (firstnameRef.current.value !== '')
			props.nextClickHandler('ask_family', {"first_name": firstnameRef.current.value})
		else
			firstnameRef.current.style.border = "1px solid red";
	}	

	useEffect (() => {
		if(typeof first_name !== 'undefined')
			firstnameRef.current.value = first_name
	},[first_name])

	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => props.nextClickHandler('ask_user')}/>
			<p>Can I ask Your Name</p>
  		<Input ref={firstnameRef} input={{"type":"text", "placeholder":"First Name", 
  		"className":"form-control rounded input-lg text-center no-border"}}/>
  		<Button title="Next" buttonClickHandler={nextHandler}/>
  	</div>
	)
}

export default AskUserFirstName;