import React,{ useRef, useEffect } from 'react';
import Button from '../UI/button';
import Back from '../UI/back';
import Input from '../UI/input';

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

function PickAge({familyMemberState, nextClickHandler})	{

	const nameRef =  useRef([])
	const yearRef =  useRef([])
	const yearErrRef = useRef([])

	let memberData={}
	let totalMembers = familyMemberState.family_member
	const renderNameAndYear = () => {
		let content = [];
		for(let i = 0; i < totalMembers-1; i++) {
			content.push(
				<li className="mb-3 ps-2">
          <div className="list-grid">
            <div className="cross-field">
              <Input ref={el => nameRef.current[i+1] = el}  input={{"key":Math.random() , "type":"text", "placeholder":"Name",
			      "className":"form-control rounded input-lg text-center no-border"}}/>
              <div className="cross-icon"></div>
            </div>
            <div className="cross-field">
              <Input ref={el => yearRef.current[i+1] = el} input={{"key":Math.random() ,"type":"text", "placeholder":"Year",
			      "className":"form-control rounded input-lg text-center no-border"}}/><span style={{"color":"red"}} ref={el => yearErrRef.current[i+1] = el}></span>
              <div className="cross-icon"></div>
            </div>
          </div>
        </li>
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
			let obj ={"name":nameRef.current[i].value, "birth_year": yearRef.current[i].value}
			memberData[i] = obj
		}
		if(!error) 
			nextClickHandler('confirmAge',{"family_members":memberData})
	}

	useEffect (() => {
		if(typeof familyMemberState.family_members !== 'undefined')
			for(let i = 0; i < familyMemberState.family_member; i++) {
				nameRef.current[i].value = familyMemberState.family_members[i].name
				yearRef.current[i].value = familyMemberState.family_members[i].birth_year
			}
	},[familyMemberState])

	return (
		<React.Fragment>
	    <div className="back-page">
	      <Back title="Back" buttonClickHandler={() => nextClickHandler('before_age')}/>
	    </div>
	    <div className="center-content mx-auto welcome-intro">
	      <div className="content-grid">
	        <div className="d-flex justify-content-center flex-column">
	          <h2>
	            {`${familyMemberState.first_name}, please add first names and year of birth.`}
	          </h2>
	          <div className="age-edit-list">
	            <ol>
	              <li className="mb-3 ps-2">
	                <div className="list-grid">
	                  <div><Input ref={el => nameRef.current[0] = el}  input={{"type":"text", "value": [familyMemberState.first_name], "placeholder":"Name",
		      							"className":"form-control"}}/><span className="ms-4">This is you!</span></div>
	                  <div className="cross-field">
	                   <Input ref={el => yearRef.current[0] = el}  input={{"type":"text", "placeholder":"Year",
	    									"className":"form-control"}}/><span style={{"color":"red"}} ref={el => yearErrRef.current[0] = el}></span>
	                    <div className="cross-icon"></div>
	                  </div>
	                </div>
	              </li>
	              {renderNameAndYear ()}
	            </ol>
	          </div>
	          <div className="mt-4">
	            <Button classes="btn btn-primary" title="Next" buttonClickHandler={nextHandler}/>
	          </div>
	        </div>
	        <div className="d-flex align-items-center">
	          <img src={require('../../assets/images/welcome_intro_6.svg').default} className="img-fluid" alt="" />
	        </div>
	      </div>
	    </div>
	  </React.Fragment>

		
	)
}

export default PickAge;