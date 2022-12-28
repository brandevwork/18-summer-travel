import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';

function BeforeAge({nextClickHandler, familyMemberState: {family_member}})	{
	const numWords = require('num-words')
	return (
	  <React.Fragment>
	    <div className="back-page">
	      <Back title="Back" buttonClickHandler={() => nextClickHandler('pickKid')}/>
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
	            <Button classes="btn btn-primary" title="Next" buttonClickHandler={() => nextClickHandler('afterKid')}/>
	          </div>
	        </div>
	        <div>
	          <img src={require('../../assets/images/welcome_family_2.svg').default} className="img-fluid" alt="" />
	        </div>
	      </div>
	    </div>
    </React.Fragment>
	)
}

export default BeforeAge;