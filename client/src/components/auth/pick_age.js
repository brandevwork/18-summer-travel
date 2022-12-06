import React,{ useRef } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';


function PickAge(props)	{
	const nameRef =  useRef([])
	const yearRef =  useRef([])

	let memberData=[]
	let totalMembers = props.familyMemberState.family_member
	const renderNameAndYear = () => {
		let content = [];
		for(let i = 0; i < totalMembers-1; i++) {
			content.push(
				<div style={{"display":"flex"}}>
			    <Input ref={el => nameRef.current[i+1] = el}  input={{"key":Math.random() , "type":"text", "placeholder":"Name",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
			    <Input ref={el => yearRef.current[i+1] = el} input={{"key":Math.random() ,"type":"text", "placeholder":"Year",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
			  </div> 
			)
		}
		return content   
	}

	const nextHandler = (e) => {
		console.log(nameRef.current)
		console.log(yearRef.current)
		// props.nextClickHandler('confirm_age',{"family_members":memberData})
	}

	return (
		<div>
  		<p>Age</p>
  		<div style={{"display":"flex"}}>
  		<Input ref={el => nameRef.current[0] = el}  input={{"type":"text", "value": [props.familyMemberState.first_name], "placeholder":"Name",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
	    <Input ref={el => yearRef.current[0] = el}  input={{"type":"text", "placeholder":"Year",
	      "className":"form-control rounded input-lg text-center no-border"}}/>
	      </div>
  		{renderNameAndYear ()}
  		<Button title="Next" buttonClickHandler={nextHandler}/>
  	</div>
	)
}

export default PickAge;