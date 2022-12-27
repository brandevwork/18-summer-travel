import React, { useContext, useEffect, useState, useReducer } from 'react';
import Back from '../UI/back';
import { useNavigate, useParams, useLocation, NavLink } from "react-router-dom";
import HomeContext from "../../store/homeContext";
import useData from "../../hooks/useData";
import homeReducer from "../../reducer/homeReducer";
import Modal from "../UI/modal";


function LetsStart(props)	{
	const [famName, setFamName] = useState('');
	const [famAge, setFamAge] = useState(0);
	const { id } = useParams();
	const navigate = useNavigate();
	const ctxHome = useContext(HomeContext);

	const initialHomeState = { familyError: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
	
	const {fetchDataHandler: sendData, loading: homeLoading} = useData();
  
  const getAuthData = async(data) => {
  	if (data.error) {
  		dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.error});
  		return;
  	}
  	if (!data) {
  		dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.message})
  		return;
  	}
  	if (data.status == "400") {
  		dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.status.message})
  		return;
  	}
  	if(data.status == "ok"){
  		await ctxHome.getAllFamilyMembers(data.data.family,data.status);
    	// navigateHandler('/');
  	}
  }

	useEffect(()=> {
		if(typeof ctxHome.family === 'object')
			ctxHome.family = Object.values(ctxHome.family)
		if(ctxHome.family.length > 0 ) {
			const ind = ctxHome.family.findIndex(f => f.id == id)
			setFamAge(ctxHome.family[ind].age)
			setFamName(ctxHome.family[ind].name)
		}else{
			sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members`, {
      method: 'GET',
		  headers: {
		    "Content-Type": "application/json",
		    Authorization: localStorage.getItem("token"),
		  },
		},
	  getAuthData);
		}
	},[ctxHome.family])

	return (
		<React.Fragment>
		{homeLoading && <Modal>Please wait! Family members are being fetched ...</Modal>}
		{homeState.familyError && 
		      <ul className="text-danger list-group">
		        {homeState.errorMessage.map((eachMessage, index) => (
		          <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
		          ))}
		      </ul>
		    }
		<div className="back-page p-4">
       <Back title="back"  buttonClickHandler={(e) => {e.preventDefault();navigate("/home")}}/>
      </div>
  
      <div className="center-content mx-auto">
        <div className="content-grid content-grid-survey-home">
          <div className="d-flex justify-content-center flex-column">
            <h2>
              Okay {famName}, let's start your survey. I am going to ask you about the things YOU like and want to do when you are on vacations!
            </h2>
            <h2 className="mt-5">
              This is going to be fun!
            </h2>
            <div className="mt-4">
            {famAge >= 14 && 
              <NavLink name="" id="" className="btn btn-primary me-5" to={`/survey/${id}`} role="button">Let's Go! (Adult)</NavLink>
          	}
            {famAge < 14 &&
              <NavLink name="" id="" className="btn btn-primary ms-3" to={`/survey/${id}`} role="button">Let's Go! (Kids)</NavLink>
          	}
            </div>
            <div className="mt-5 font-23">
              If this is not {famName} and someone else wants needs to finish their survey return to the <NavLink to="/home">Survey Start</NavLink> page.
            </div>
          </div>
          <div>
            <img src={require("../../assets/images/Interests.svg").default} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      </React.Fragment>
	)
}

export default LetsStart;