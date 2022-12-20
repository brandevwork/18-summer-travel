import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';

function AskFamily({nextClickHandler, familyMemberState: {first_name}})	{
	return (
	  <div className="main-wrapper">
	    <div className="welcome-screens">
	      <div className="back-page">
	        <Back title="Back" buttonClickHandler={() => nextClickHandler('askUserFirstname')}/>
	      </div>
	  
	      <div className="center-content mx-auto welcome-intro">
	        <div className="content-grid">
	          <div className="d-flex justify-content-center flex-column">
	            <h2>
	              Great to meet you, <strong>{`${first_name}`}!</strong>
	            </h2>
	            <h2 className="mt-3">
	              Now I will get information about the rest of your family.
	            </h2>
	            <div className="mt-4">
	              <Button classes="btn btn-primary" title="Next" buttonClickHandler={() => nextClickHandler('pickKid')}/>
	            </div>
	          </div>
	          <div>
	            <img src={require('../../assets/images/welcome_intro_4.svg').default} className="img-fluid" alt="" />
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

export default AskFamily;