import React, { useRef } from 'react';
import Button from '../UI/button';
import Back from '../UI/back';
import { NavLink } from "react-router-dom";

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
				<ol>
					<li className="mb-1 ps-2">
	          <div className="list-grid list-grid-confirm">
	            <div ref={el => yearRef.current[i+1] = el}>{totalMembersData[i].name}</div>
	            <div ef={el => yearRef.current[i+1] = el}>{getAge(totalMembersData[i].birth_year)}</div>
	          </div>
	        </li>
			  </ol> 
			)
		}
		return content   
	}
	return (
		<div className="main-wrapper">
		  <div className="welcome-screens">
		    <div className="back-page">
		      <Back title="Back" buttonClickHandler={() => nextClickHandler('pickAge')}/>
		    </div>

		    <div className="center-content mx-auto welcome-intro">
		      <div className="content-grid">
		        <div className="d-flex justify-content-center flex-column">
		          <h2>
		            Does this look right?
		          </h2>
		          <p className="font-bold">Click the <NavLink onClick={() => nextClickHandler('pickAge')}>Back</NavLink> button to make a correction.</p>
		          <div className="age-edit-list">
  							{renderNameAndYear ()}
		          </div>
		          <div className="mt-4">
		            <Button classes="btn btn-primary" title="Next" buttonClickHandler={() => nextClickHandler('saveBeforeSignup')}/>
		          </div>
		        </div>
		        <div className="d-flex">
		          <img src={require('../../assets/images/welcome_intro_6.svg').default} className="img-fluid" alt="" />
		        </div>
		      </div>
		    </div>

		    <div className="footer-links mt-5 px-3">
		      <div className="d-flex align-items-center">
		        <a href="./index.html" className="d-flex align-items-center me-4">
		          <div className="d-flex">
		            <img src={require('../../assets/images/home-icon.svg').default} className="img-fluid me-1" alt="" />
		          </div>
		          Home
		        </a>
		        <a href="" className="d-flex align-items-center">
		          <div className="d-flex">
		            <img src={require('../../assets/images/info-icon.svg').default} className="img-fluid me-1" alt="" />
		          </div>
		          Instructions
		        </a>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default ConfirmAge;