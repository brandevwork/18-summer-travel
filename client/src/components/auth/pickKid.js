import React, { useState } from 'react';
import Button from '../UI/button';
import Back from '../UI/back';
import Dropdown from 'react-bootstrap/Dropdown';

function PickKid({nextClickHandler}) {
	const [familyMember, setFamilyMemeber] = useState(0)
	
	const selectMemberHandler = (e) => {
		setFamilyMemeber(e)
	}

	const nextHandler = (e) => {
		if(familyMember !== 0)
			nextClickHandler('afterKid',{"family_member": familyMember})
	}

	return (
		<div className="main-wrapper">
	    <div className="welcome-screens">
	      <div className="back-page">
	       <Back title="Back" buttonClickHandler={() => nextClickHandler('askFamily')}/>
	      </div>

	      <div className="center-content mx-auto welcome-intro">
	        <div className="content-grid">
	          <div className="d-flex justify-content-center flex-column">
	            <h2>
	              Including you, how many people - kids and adults - in your family will you be traveling with?
	            </h2>
	              <Dropdown  onSelect={selectMemberHandler}>
						      <Dropdown.Toggle variant="light" id="dropdown-basic">
						        PickKids
						      </Dropdown.Toggle>

						      <Dropdown.Menu>
						        <Dropdown.Item eventKey="1">1</Dropdown.Item>
						        <Dropdown.Item eventKey="2">2</Dropdown.Item>
						        <Dropdown.Item eventKey="3">3</Dropdown.Item>
						        <Dropdown.Item eventKey="4">4</Dropdown.Item>
						        <Dropdown.Item eventKey="5">5</Dropdown.Item>
						        <Dropdown.Item eventKey="6">6</Dropdown.Item>
						      </Dropdown.Menu>
						    </Dropdown>
	            <div className="mt-4">
	            	<Button classes="btn btn-primary" title="Next" buttonClickHandler={nextHandler}/>
	            </div>
	          </div>
	          <div>
	            <img src={require('../../assets/images/welcome_intro_5.svg').default} className="img-fluid" alt="" />
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

export default PickKid;