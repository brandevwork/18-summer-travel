import React, { useEffect, useReducer, useContext } from 'react';
import Back from '../UI/back';
import { NavLink, useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";

function Home()	{

	const ctxUser = useContext(AuthContext);
	const ctxHome = useContext(HomeContext);
	const navigate = useNavigate();

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

	useEffect(() => {
    if (ctxUser.id !== '' && !homeState.familyError) {
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
  }, [homeState, sendData, ctxHome.survey])
	

	return (
		<React.Fragment>
				{homeLoading && <Modal>Please wait! Family members are being fetched ...</Modal>}
				{ctxHome.notification.length > 0 && 
		      <ul className="text-danger list-group">
		        {ctxHome.notification.map((eachMessage, index) => (
		          <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
		          ))}
		      </ul>
		    }
		    {homeState.familyError && 
		      <ul className="text-danger list-group">
		        {homeState.errorMessage.map((eachMessage, index) => (
		          <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
		          ))}
		      </ul>
		    }
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
    </React.Fragment>
	)
}

export default Home;