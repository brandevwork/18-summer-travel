import React, { useContext } from 'react';
import Button from '../UI/Button';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../store/auth-context";




function Setup(props)	{
	const ctxAuth = useContext(AuthContext);
	const navigate = useNavigate();
	const navigateHandler = (e) => {
		// navigate(e);
    ctxAuth.signup({"name": props.familyMemberState.family.first_name+" "+props.familyMemberState.family.last_name, "email": props.familyMemberState.family.email, "notification":props.familyMemberState.family.notification});

	}
	return (
		<div>
  		<p>All Setup</p>
  		<Button title="Next" buttonClickHandler={() => navigateHandler('/')}/>
  	</div>
	)
}

export default Setup;