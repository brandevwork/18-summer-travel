import React, { useRef, useEffect } from 'react';
import Input from '../UI/input';
import Button from '../UI/button';

function AskUserFirstName({familyMemberState: {first_name}, nextClickHandler})	{
	const firstnameRef = useRef()

	const nextHandler = (e) => {
		if (firstnameRef.current.value !== '')
			nextClickHandler('askFamily', {"first_name": firstnameRef.current.value})
		else
			firstnameRef.current.style.border = "1px solid red";
	}	

	useEffect (() => {
		if(typeof first_name !== 'undefined')
			firstnameRef.current.value = first_name
	},[first_name])

	return (
		<div>
  		<Button title="Back" buttonClickHandler={() => nextClickHandler('askUser')}/>
			<p>Can I ask Your Name</p>
  		<Input ref={firstnameRef} input={{"type":"text", "placeholder":"First Name", 
  		"className":"form-control rounded input-lg text-center no-border"}}/>
  		<Button title="Next" buttonClickHandler={nextHandler}/>
  	</div>
	)
}

export default AskUserFirstName;