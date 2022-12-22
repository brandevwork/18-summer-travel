import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';

function SaveBeforeSignup({nextClickHandler, familyMemberState: {first_name}})	{
	return (
		<React.Fragment>
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
    </React.Fragment>
	)
}

export default SaveBeforeSignup;