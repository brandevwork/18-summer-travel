import React, { useRef } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

function AskUserFirstName(props)	{

	const nextHandler = (e) => {
		if (props.firstnameRef.current.value !== '')
			props.nextClickHandler('ask_family', {"first_name": props.firstnameRef.current.value})
		else
			props.firstnameRef.current.style.border = "1px solid red";
	}

	return (
		<div>
			<p>Can I ask Your Name</p>
  		<Input ref={props.firstnameRef} input={{"type":"text", "placeholder":"First Name", 
  		"className":"form-control rounded input-lg text-center no-border"}}/>
  		<Button title="Next" buttonClickHandler={nextHandler}/>
  	</div>
	)
}

export default AskUserFirstName;