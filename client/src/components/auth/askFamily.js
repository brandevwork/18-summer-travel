import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';

function AskFamily({nextClickHandler, familyMemberState: {first_name}})	{
	return (
	  <React.Fragment>
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
    </React.Fragment>
	)
}

export default AskFamily;