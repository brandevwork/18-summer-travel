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
	            {family_member == 1 && <h2>Just the {numWords(family_member)} of you! That will be a lot of fun!</h2>}
	            {family_member == 2 && <h2>Just the {numWords(family_member)} of you! That will be a lot of fun!</h2>}
	            {family_member == 3 && <h2>So the three of you! That will be a great time! </h2>}
	            {family_member == 4 && <h2>So the four of you! A great-sized group!</h2>}
	            {family_member == 5 && <h2>A family of five! A great-sized group!</h2>}
	            {family_member == 6 && <h2>A family of six! That is a party where ever you go! </h2>}
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