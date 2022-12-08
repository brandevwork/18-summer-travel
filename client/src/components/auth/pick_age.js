import React,{ useRef } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

function yearValidation(year) {

  var text = /^[0-9]+$/;
    if (year != 0) {
        if ((year != "") && (!text.test(year))) 
            return {"msg": "Please Enter Numeric Values Only", "res":false}
        if (year.length != 4)
            return {"msg": "Year is not proper. Please check", "res":false}
        var current_year=new Date().getFullYear();
        if((year < 1920) || (year > current_year))
            return {"msg": "Year should be in range 1920 to current year", "res":false}
        return {"res":true,"msg":""};
    }
}

function PickAge(props)	{
	const nameRef =  useRef([])
	const yearRef =  useRef([])
	const yearErrRef = useRef([])

	let memberData={}
	let totalMembers = props.familyMemberState.family_member
	const renderNameAndYear = () => {
		let content = [];
		for(let i = 0; i < totalMembers-1; i++) {
			content.push(
				<div style={{"display":"flex"}}>
			    <Input ref={el => nameRef.current[i+1] = el}  input={{"key":Math.random() , "type":"text", "placeholder":"Name",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
			    <Input ref={el => yearRef.current[i+1] = el} input={{"key":Math.random() ,"type":"text", "placeholder":"Year",
			      "className":"form-control rounded input-lg text-center no-border"}}/><span style={{"color":"red"}} ref={el => yearErrRef.current[i+1] = el}></span>
			  </div> 
			)
		}
		return content   
	}

	const nextHandler = (e) => {
		let error = false
		for(let i = 0; i < totalMembers; i++) {
			if(nameRef.current[i].value == '') {
				error = true
				nameRef.current[i].style.border = "1px solid red";
			}
			if(yearRef.current[i].value == '') {
				error = true
				yearRef.current[i].style.border = "1px solid red";
			}
			if(yearRef.current[i].value !== '') {
				let retObj = yearValidation(yearRef.current[i].value)
				if(!retObj.res){
					error = true
					yearRef.current[i].style.border = "1px solid red";
					yearErrRef.current[i].innerHTML = retObj.msg
				}
			}
			let obj ={"name":nameRef.current[i].value, "date_of_birth": yearRef.current[i].value}
			memberData[i] = obj
		}
		if(!error) 
			props.nextClickHandler('confirm_age',{"family_members":memberData})
	}

	return (
		<div>
  		<p>Age</p>
  		<div style={{"display":"flex"}}>
  		<Input ref={el => nameRef.current[0] = el}  input={{"type":"text", "value": [props.familyMemberState.first_name], "placeholder":"Name",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
	    <Input ref={el => yearRef.current[0] = el}  input={{"type":"text", "placeholder":"Year",
	      "className":"form-control rounded input-lg text-center no-border"}}/><span style={{"color":"red"}} ref={el => yearErrRef.current[0] = el}></span>
	      </div>
  		{renderNameAndYear ()}
  		<Button title="Next" buttonClickHandler={nextHandler}/>
  	</div>
	)
}

export default PickAge;