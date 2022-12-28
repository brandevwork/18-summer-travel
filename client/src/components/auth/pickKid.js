import React, { useState } from 'react';
import Button from '../UI/button';
import Back from '../UI/back';
import Dropdown from 'react-bootstrap/Dropdown';

function PickKid({nextClickHandler}) {
	const [familyMember, setFamilyMemeber] = useState(0)
	
	const selectMemberHandler = (e) => {
		setFamilyMemeber(e)
	}

	const nextHandler = (e) => {
		if(familyMember !== 0)
			nextClickHandler('before_age',{"family_member": familyMember})
	}

	return (
		<React.Fragment>
      <div className="back-page">
       <Back title="Back" buttonClickHandler={() => nextClickHandler('askFamily')}/>
      </div>
      <div className="center-content mx-auto welcome-intro">
        <div className="content-grid">
          <div className="d-flex justify-content-center flex-column">
            <h2>
              Including you, how many people - kids and adults - in your family will you be traveling with?
            </h2>
              <Dropdown  onSelect={selectMemberHandler}>
					      <Dropdown.Toggle variant="light" id="dropdown-basic">
					        {familyMember != 0 ? familyMember : "Pick One"}
					      </Dropdown.Toggle>

					      <Dropdown.Menu>
					        <Dropdown.Item eventKey="0">Pick One</Dropdown.Item>
					        <Dropdown.Item eventKey="1">1</Dropdown.Item>
					        <Dropdown.Item eventKey="2">2</Dropdown.Item>
					        <Dropdown.Item eventKey="3">3</Dropdown.Item>
					        <Dropdown.Item eventKey="4">4</Dropdown.Item>
					        <Dropdown.Item eventKey="5">5</Dropdown.Item>
					        <Dropdown.Item eventKey="6">6</Dropdown.Item>
					      </Dropdown.Menu>
					    </Dropdown>
            <div className="mt-4">
            	<Button classes="btn btn-primary" title="Next" buttonClickHandler={nextHandler}/>
            </div>
          </div>
          <div>
            <img src={require('../../assets/images/welcome_intro_5.svg').default} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
	  </React.Fragment>
		
	)
}

export default PickKid;