import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';

function SaveBeforeSignup({nextClickHandler, familyMemberState: {first_name}})	{
	return (
		<div className="main-wrapper">
	    <div className="welcome-screens">
	      <div className="back-page p-4">
  				<Back title="Back" buttonClickHandler={() => nextClickHandler('confirmAge')}/>
	      </div>
	  
	      <div className="center-content mx-auto">
	        <div className="content-grid">
	          <div className="d-flex justify-content-center flex-column">
	            <h2>
	              Nice work, <span className="font-bold">{`${first_name}!`}</span>
	            </h2>
	            <h2 className="mt-4">
	              Okay... before we go on. Let's save your work. Also, by saving - this allows you to stop and finish at a later time.
	            </h2>
	            <div className="mt-4">
	              <Button classes="btn btn-primary" title="Let's Save Our Work" buttonClickHandler={() => nextClickHandler('signupSection')}/>
	            </div>
	          </div>
	          <div>
	            <img src={require('../../assets/images/welcome_registration.svg').default} className="img-fluid" alt="" />
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

export default SaveBeforeSignup;