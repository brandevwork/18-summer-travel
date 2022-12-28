import React, { useRef, useEffect } from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import Back from '../UI/back';

function AskUserFirstName({familyMemberState: {first_name}, nextClickHandler})	{
	const firstnameRef = useRef()
  const errRef = useRef()
  let regex = /^[a-zA-Z ]*$/;
	const nextHandler = (e) => {
		if (firstnameRef.current.value !== '' )
      if(regex.test(firstnameRef.current.value)){
			 nextClickHandler('askFamily', {"first_name": firstnameRef.current.value})
      }
      else{
        firstnameRef.current.style.border = "1px solid red";
        errRef.current.innerHTML="Only alphabets are allowed";
      }

		else{
      errRef.current.innerHTML="Please fill this field";
			firstnameRef.current.style.border = "1px solid red";
    }
	}	

	useEffect (() => {
		if(typeof first_name !== 'undefined')
			firstnameRef.current.value = first_name
	},[first_name])

  const crossHandler = (event) => {
    if (event.target.className === 'cross-icon') {
      firstnameRef.current.value=""
    }
  }

	return (
		<React.Fragment>
      <div className="back-page">
        <Back title="Back" buttonClickHandler={() => nextClickHandler('askUser')}/>
      </div>
      <div className="center-content mx-auto welcome-intro intro-3">
        <div className="content-grid">
          <div className="d-flex justify-content-center flex-column">
            <h2>
              Oh wait... You know my name... but I didn't get your name.
            </h2>
            <h2 className="mt-3">
              What is your first name, please?
            </h2>
            <div>
              <div className="mt-4 mb-5 cross-field" onClick={crossHandler}>
              	<Input ref={firstnameRef} input={{"type":"text", "placeholder":"First Name", 
									"className":"form-control", "aria-describedby" :"helpId"}}/><span style={{"color":"red"}} ref={errRef}></span>
                <div className="cross-icon" ></div>
              </div>
            </div>
            <div>
              <Button classes="btn btn-primary" title="Next" buttonClickHandler={nextHandler} />
            </div>
          </div>
          <div>
            <img src={require('../../assets/images/welcome_intro_3.svg').default} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>

	)
}

export default AskUserFirstName;