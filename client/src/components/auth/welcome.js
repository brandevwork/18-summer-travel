import React from 'react';
import Button from '../UI/button';
import Back from '../UI/back';
import HomeBtn from '../UI/homeBtn';
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Welcome({nextClickHandler})	{
	const navigate = useNavigate()
	
	const btnHandler = (e) => {
		e.preventDefault()
		navigate("/")
	}

	return (
		<React.Fragment>
      <div className="back-page p-4">
        <Back title="Back" buttonClickHandler={btnHandler} />
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
            	<Button classes="btn btn-primary" title="Next" buttonClickHandler={() => nextClickHandler('askUser')}/>
            </div>
          </div>
          <div>
            <img src={require('../../assets/images/welcome_intro_1.svg').default} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
	)
}

export default Welcome;