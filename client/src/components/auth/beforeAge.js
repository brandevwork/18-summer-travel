import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';

function BeforeAge({nextClickHandler, familyMemberState: {family_member}})	{
	const numWords = require('num-words')
	return (
	  <div className="main-wrapper">
	    <div className="welcome-screens">
	      <div className="back-page">
	        <Back title="Back" buttonClickHandler={() => nextClickHandler('afterKid')}/>
	      </div>
	  
	      <div className="center-content mx-auto welcome-intro">
	        <div className="content-grid">
	          <div className="d-flex justify-content-center flex-column">
	            <h2>
	              {`Its the ${numWords(family_member)} of you!`}
	            </h2>
	            <h2 className="mt-4">
	              That will be a lot of fun!
	            </h2>
	            <div className="mt-4">
	              <Button classes="btn btn-primary" title="Next" buttonClickHandler={() => nextClickHandler('pickAge')}/>
	            </div>
	          </div>
	          <div>
	            <img src={require('../../assets/images/welcome_family_2.svg').default} className="img-fluid" alt="" />
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

export default BeforeAge;