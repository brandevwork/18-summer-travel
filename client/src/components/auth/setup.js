import React from 'react';
import Button from '../UI/Button';
import { NavLink, useNavigate, useLocation } from "react-router-dom";



function Setup(props)	{
	const navigate = useNavigate();
	const navigateHandler = (e) => {
		navigate(e);
	}
	return (
		<div>
  		<p>All Setup</p>
  		<Button title="Next" buttonClickHandler={() => navigateHandler('/')}/>
  	</div>
	)
}

export default Setup;