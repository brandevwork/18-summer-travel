import React from 'react';
import { NavLink } from 'react-router-dom';

function Home(props)	{
	return (
		<div>
			<h1>Home</h1>	
			<NavLink to="/profile">Go to Profile</NavLink>
		</div>
	)
}

export default Home;