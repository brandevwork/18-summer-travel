import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';

function AfterKid({familyMemberState: {family_member, first_name}, nextClickHandler})	{
	return (
		<React.Fragment>
      <div className="back-page">
        <Back title="Back" buttonClickHandler={() => nextClickHandler('before_age')}/>
      </div>
      <div className="center-content mx-auto welcome-intro">
        <div className="content-grid">
          <div className="d-flex justify-content-center flex-column">
            <h2>
              {`Okay, ${first_name}, let's get the names  and ages of your family members.`}
            </h2>
            <div className="mt-4">
              <Button classes="btn btn-primary" title="Next" buttonClickHandler={() => nextClickHandler('pickAge')}/>
            </div>
          </div>
          <div>
            <img src={require('../../assets/images/welcome_intro_6.svg').default} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
	)
}

export default AfterKid;