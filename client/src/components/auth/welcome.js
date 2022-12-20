import React from 'react';
import Button from '../UI/button';

function Welcome({nextClickHandler})	{

	return (
		<div className="main-wrapper">
	    <div className="welcome-screens">
	      <div className="back-page p-4">
	        <a href="./index.html">
	          <div className="d-flex align-items-center">
	            <div><img src={require('../../assets/images/back-arrow.svg').default} className="img-fluid me-1" alt="" /></div>
	            <div className="back-text">Back</div>
	          </div>
	        </a>
	      </div>
	  
	      <div className="d-flex">
	        <div className="summer-heading default-heading d-flex align-items-center">
	          Welcome!
	        </div>
	      </div>
	  
	      <div className="center-content mx-auto">
	        <div className="content-grid">
	          <div className="d-flex justify-content-center flex-column">
	            <h2>
	              I'm KeeKee!<br />
	              Together we will figure out the best destinations for your family vacations based on what you like to do and the ages of your children.
	            </h2>
	            <div className="mt-4">
	            	<Button title="Next" buttonClickHandler={() => nextClickHandler('askUser')}/>
	            </div>
	          </div>
	          <div>
	            <img src={require('../../assets/images/welcome_intro_1.svg').default} className="img-fluid" alt="" />
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
	        <a href="" className="d-flex align-items-center">
	          Privacy
	        </a>
	      </div>
	    </div>
	  </div>
	)
}

export default Welcome;