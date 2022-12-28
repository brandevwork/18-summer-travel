import React,{ useContext } from 'react';
import Back from '../UI/back';
import Button from "../UI/button";
import HomeContext from "../../store/homeContext";
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";


function FinishSurvey({currName, questionIndex, heading ,question_image, question_text, question_id, choices, submitHandler})	{
	const ctxHome = useContext(HomeContext);
  const finishSurvey = async() => {
  	ctxHome.finishSurvey()
		navigate("/home")
	}

	const { id } = useParams();
  const navigate = useNavigate();
	return (
		<React.Fragment>
		<div className="back-page">
    	<Back title="back"  buttonClickHandler={(e) => {e.preventDefault();submitHandler(id, parseInt(question_id), {}, parseInt(questionIndex), "Finish")}}/>
    </div>
    <div className="center-content mx-auto">
      <div className="content-grid">
        <div className="d-flex justify-content-center flex-column">
          <h2><span className="font-bold">{currName}</span>, guess what!?</h2>
          <h2 className="mt-4">You have finished the survey!</h2>
          <h2>Woo hoo! Nice work!Now we'll go back to your Survey Main Page.</h2>
          <p className="font-23">
            From there you can see all the results so far, and when everyone has filled out the survey, view your family recommendations.
          </p>
          <div className="mt-4">
          	<Button title="Go" classes="btn btn-primary me-5" buttonClickHandler={finishSurvey} />
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
	)
}

export default FinishSurvey;