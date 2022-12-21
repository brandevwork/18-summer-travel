import React, { useRef, useEffect, useReducer, useContext } from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import Back from '../UI/back';
import HomeBtn from '../UI/homeBtn';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";

function Home()	{

	let isInitial = true;

	const ctxUser = useContext(AuthContext);
	const ctxHome = useContext(HomeContext);
	const location = useLocation();
	const navigate = useNavigate();

	const initialHomeState = { family_members:{}, error: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
	
	const {fetchDataHandler: sendData, loading: homeLoading} = useData();
  
  const getAuthData = async(data) => {
  	if (data.error) {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.error});
  		return;
  	}
  	if (!data.data) {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.message})
  	}
  	if (data.status == "400") {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.status.message})
  	}
  	if(data.status == "ok"){
  		await ctxHome.getAllFamilyMembers(data.data.family,data.status);
    	// navigateHandler('/');
  	}
  }

	useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(!isInitial) {
    	alert("here")
      if (ctxUser.id !== '') {
      	sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members`, {
	      method: 'GET',
			  headers: {
			    "Content-Type": "application/json",
			    Authorization: localStorage.getItem("token"),
			  },
			},
		  getAuthData);
      	// navigateHandler('/main');
      }
    }
  }, [homeState, sendData, ctxHome.survey])

	const btnHandler = (e) => {
		e.preventDefault()
		navigate("/")
	}
	

	return (
		<div className="main-wrapper">
	    <div className="welcome-screens">
	      <div className="back-page p-4">
	        <Back title="back"  buttonClickHandler={(e) => {e.preventDefault();navigate("/")}}/>
	      </div>
	  
	      <div className="center-content mx-auto">
	        <div className="content-grid content-grid-survey-home">
	          <div className="d-flex justify-content-center flex-column">
	            <h2 className="m-0 font-23">
	              18 Summers
	            </h2>
	            <h2 className="primary-clr font-bold mt-2">
	              Survey Home
	            </h2>
	            <p className="font-23">Here is the status of each person's survey results.</p>
	            <div className="status-wrapper mb-4">
	              <h2 className="font-23 d-flex justify-content-center font-bold">Status</h2>
	              {ctxHome.family.length > 0 &&
									ctxHome.family.map(member =>
			                	{
			                		if (member.survey_status == 'pending' && member.age > 4) {
														return (<div className="d-flex align-items-center mb-2">
							                <div>
							                	<NavLink to={`/survey/${member.id}`} className="btn btn-warning btn-sm me-2">
							                		Not Started
							                	</NavLink>
							                </div>
							                <div className="font-30 ms-4 lh-1">{member.name}</div>
							              </div>)
			                		}
			                		if (member.survey_status == 'in_progress' && member.age > 4)
			                			return (<div className="d-flex align-items-center mb-2">
							                <div>
							                	<NavLink to={`/survey/${member.id}`} className="btn btn-yellow btn-sm me-2">
							                		Started
							                	</NavLink>
							                </div>
							                <div className="font-30 ms-4 lh-1">{member.name}</div>
							              </div>)
			                		if (member.survey_status == 'completed' && member.age > 4)
			                			return (<div className="d-flex align-items-center mb-2">
							                <div>
							                	<NavLink to="/" className="btn btn-success btn-sm me-2">
							                		Finished
							                	</NavLink>
							                </div>
							                <div className="font-30 ms-4 lh-1">{member.name}</div>
							              </div>)
						              if (member.age <= 4)
			                			return (<div className="d-flex align-items-center mb-2">
							                <div>
							                	<NavLink to="/home" className="btn btn-default btn-sm me-2">
							                		Too Young
							                	</NavLink>
							                </div>
							                <div className="font-30 ms-4 lh-1">{member.name}</div>
							              </div>)
			                	}
									)
								}

	            </div>
	            <div className="mb-3">
	              <a name="" id="" className="btn btn-primary" href="./interests.html" role="button">View Recomendations</a>
	            </div>
	            <div className="d-flex flex-column">
	              <div>
	                For each family member:
	              </div>
	              <div>
	                Click <span className="font-bold">Finished</span> to view survey answers.
	              </div>
	              <div>
	                Click <span className="font-bold">Started</span> to finish the survey.
	              </div>
	              <div>
	                Click <span className="font-bold">Not Started</span> to start the survey for that person.
	              </div>
	            </div>
	            <div className="mt-4 font-15 for-child">
	              *For children under 4-years-old since they are too little to have strong preferences, we don't have you complete a survey.
	            </div>
	          </div>
	          <div className="d-flex">
	            <img src={require('../../assets/images/survey-home.svg').default} className="img-fluid" alt="" />
	          </div>
	        </div>
	      </div>
	  
	      <div className="footer-links mt-5 px-3">
	        <div className="d-flex align-items-center">
	          <HomeBtn title="Home" buttonClickHandler={(e) => {e.preventDefault();navigate("/")}}/>
	          <a href="" className="d-flex align-items-center">
	            <div className="d-flex">
	              <img src={require('../../assets/images/info-icon.svg').default} className="img-fluid me-1" alt="" />
	            </div>
	            Instructions
	          </a>
	        </div>
	      </div>
	    </div>
	  </div>
	)
}

export default Home;