import React, { useRef, useState, useEffect, useReducer, useContext } from 'react';
import Input from '../UI/input';
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";
import Button from "../UI/button";

function Question({question_text, question_id, choices, submitHandler})	{

	const [checkedState, setCheckedState] = useState(
    new Array(choices.length).fill(false)
  );

  const [choicesAnswers, setChoicesAnswers] = useState([])
	const choiceRef = useRef([])
	const { id } = useParams();
	const ctxUser = useContext(AuthContext);
	const ctxHome = useContext(HomeContext);
	const location = useLocation();

	const checkClickHandler = (e, position) => {

		const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

		let clickedId = e.target.getAttribute('id')
		if(e.target.checked) {
			let found = choicesAnswers.findIndex(ca => ca == clickedId)
			if(found < 0) {
				setChoicesAnswers(prevState => {return [...prevState, clickedId]})
			}
		}else {
			setChoicesAnswers((current) =>
	      current.filter((checks) => checks !== clickedId)
	    );
		}
	}

	useEffect(()=>{
		let localSurvey = ctxHome.survey.findIndex(sur => sur.id.toString() == question_id.toString())
		let localChoices = (ctxHome.survey[localSurvey].choices.map(eachChoice => typeof eachChoice.answer !== 'undefined'))
    setCheckedState(localChoices);
	},[question_id])

	return (
		// <div>
		// 	<p>{question_text}</p><br/>
		// 	{choices.map((choice, index) =>
		// 		<><input ref={el => choiceRef.current[choice.id] = el} checked={checkedState[index]}  id={choice.id} type="checkbox" onClick={(e) => checkClickHandler(e, index)}/>{choice.choice_text}<br/></>
		// 	)}
		// 	<Button title="Back" buttonClickHandler={() => submitHandler(id, parseInt(question_id)-2, {})}/>
		// 	<Button title="Next" buttonClickHandler={() => submitHandler(id, question_id, choicesAnswers)}/>
		// </div>

			<div className="main-wrapper">
			<div className="welcome-screens">
				<div className="back-page p-4">
					<a href="./index.html">
						<div className="d-flex align-items-center">
							<div><img src={require('../../assets/images/back-arrow.svg').default} className="img-fluid me-1" alt="" /></div>
							<div className="back-text">Back</div>
						</div>
					</a>
				</div>

				<div className="center-content mx-auto">
					<div className="content-grid">
						<div className="d-flex justify-content-center flex-column">
							<h2>
								{question_text}
							</h2>
							<p className="font-23">
								Check all the things you like to do!
							</p>
							<div>
								<div className="form-check mb-2">
									<input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked />
									<label className="form-check-label font-24" for="check1">Go to a spa: get a massage</label>
								</div>
								<div className="form-check mb-2">
									<input type="checkbox" className="form-check-input" id="check2" name="option1" value="something" checked />
									<label className="form-check-label font-24" for="check2">Enjoy the sun: Work on your suntan</label>
								</div>
								<div className="form-check mb-2">
									<input type="checkbox" className="form-check-input" id="check3" name="option1" value="something" checked />
									<label className="form-check-label font-24" for="check3">Go shopping</label>
								</div>
								<div className="form-check mb-2">
									<input type="checkbox" className="form-check-input" id="check4" name="option1" value="something" checked />
									<label className="form-check-label font-24" for="check4">Visit a winery</label>
								</div>
								<div className="form-check mb-2">
									<input type="checkbox" className="form-check-input" id="check5" name="option1" value="something" checked />
									<label className="form-check-label font-24" for="check5">Take cooking classes</label>
								</div>
								<div className="form-check mb-2">
									<input type="checkbox" className="form-check-input" id="check6" name="option1" value="something" checked />
									<label className="form-check-label font-24" for="check6">Experience the city night life</label>
								</div>
							</div>
							<div className="mt-4">
								<a name="" id="" className="btn btn-primary me-5" href="./interests_activity_2.html" role="button">Next</a>
							</div>
						</div>
						<div className="activity-img">
							<img src={require('../../assets/images/activity_1.png').default} className="img-fluid" alt="" />
						</div>
					</div>
				</div>

				<div className="footer-links mt-5 px-3">
					<div className="d-flex align-items-center">
						<a href="./index.html" className="d-flex align-items-center me-4">
							<div className="d-flex">
								<img src={require('../../assets/images/home-icon.svg').default} className="img-fluid me-1" alt="" />
							</div>
							Home
						</a>
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

export default Question;