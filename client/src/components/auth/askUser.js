import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';

function AskUser({nextClickHandler})	{
	return (
		<div className="main-wrapper">
	    <div className="welcome-screens">
	      <div className="back-page">
	        <Back title="Back" buttonClickHandler={() => nextClickHandler('welcome')}/>
	      </div>
	  
	      <div className="center-content mx-auto welcome-intro">
	        <div className="content-grid">
	          <div className="d-flex justify-content-center flex-column">
	            <h2>
	              I will ask you and all of your family members some questions about your travel likes and preferences - and I will use this to create up to 18-years worth of vacation destination ideas! 
	            </h2>
	            <h2 className="mt-3">
	              Sound good? Let's go!
	            </h2>
	            <div className="mt-4">
	              <Button classes="btn btn-primary" title="Next" buttonClickHandler={() => nextClickHandler('askUserFirstname')}/>
	            </div>
	          </div>
	          <div>
	            <img src={require('../../assets/images/welcome_intro_2.svg').default} className="img-fluid" alt="" />
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

export default AskUser;