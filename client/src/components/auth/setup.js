import React, { useContext } from 'react';
import Button from '../UI/button';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../store/authContext";

function Setup({familyMemberState: {family :{first_name, last_name, email, id, jti, notification}}})	{
	const ctxAuth = useContext(AuthContext);
	const navigate = useNavigate();
	const navigateHandler = (e) => {
		// navigate(e);
    ctxAuth.signup({"name": first_name+" "+last_name, "email": email, "id": id, "jti": jti, "notification":notification});

	}
	return (
		<div>
  		<p>All Setup</p>
  		<Button title="Next" buttonClickHandler={() => navigateHandler('/')}/>
  	</div>
	)
}

export default Setup;