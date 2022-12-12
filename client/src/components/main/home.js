import React, { useRef, useEffect, useReducer, useContext } from 'react';
import Input from '../UI/Input';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/auth-context";
import HomeContext from "../../store/home-context";
import Modal from "../UI/Modal";
import homeReducer from "../../reducer/homeReducer";

function Home(props)	{

	let isInitial = true;

	const ctxUser = useContext(AuthContext);
	const ctxHome = useContext(HomeContext);
	const location = useLocation();

	const initialHomeState = { family_members:{}, error: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
	
	const {fetchDataHandler: sendData, loading: homeLoading} = useData();
  
  const getAuthData = async(data) => {
  	console.log(data)
  	console.log("data")
  	if (data.error) {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.error});
  		return;
  	}
  	if (!data.data) {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.message})
  	}
  	if (data.status.code == "400") {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.status.message})
  	}
  	if(data.status.code == "200"){
  		// await ctxAuth.login({"name": data.data.first_name+" "+data.data.last_name, "email": data.data.email, "id": data.data.id, "notification": data.status.message});
    	// navigateHandler('/');
  	}
  }

	useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(!isInitial) {
      if (ctxUser.id !== '') {
      	sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members/${ctxUser.id}`, {
	      method: 'GET',
			  headers : { 
	        'Content-Type': 'application/json',
	        'Accept': 'application/json',
	        'jti': `${ctxUser.jti}`
	      }
			},
		  getAuthData);
      	// navigateHandler('/main');
      }
    }
  }, [homeState, sendData])

	return (
		<div>
			<h1>Home</h1>	
			<h3>Here is the status of each person survery results</h3>

			<NavLink to="/profile">Go to Profile</NavLink>
			<NavLink to="/profile">Go to Profile</NavLink>
			<NavLink to="/profile">Go to Profile</NavLink>
			<NavLink to="/profile">Go to Profile</NavLink>
			<NavLink to="/profile">Go to Profile</NavLink>
			<NavLink to="/profile">Go to Profile</NavLink>
			<NavLink to="/profile">Go to Profile</NavLink>
		</div>
	)
}

export default Home;