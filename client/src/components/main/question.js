import React, { useRef, useState, useEffect, useReducer, useContext } from 'react';
import Input from '../UI/input';
import HomeBtn from '../UI/homeBtn';
import Back from '../UI/back';
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";
import Button from "../UI/button";

function Question({questionIndex, question_text, question_id, choices, submitHandler})	{

	const [checkedState, setCheckedState] = useState(
    new Array(choices.length).fill(false)
  );

  const [choicesAnswers, setChoicesAnswers] = useState([])
	const choiceRef = useRef([])
	const { id } = useParams();
	const ctxUser = useContext(AuthContext);
	const ctxHome = useContext(HomeContext);
	const location = useLocation();
	const navigate = useNavigate();

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
		setChoicesAnswers([])
		let localSurvey = ctxHome.survey.findIndex(sur => sur.id.toString() == question_id.toString())
		let localChoices = (ctxHome.survey[localSurvey].choices.map(eachChoice => typeof eachChoice.answer !== 'undefined'))
    setCheckedState(localChoices);
	},[question_id])

	const btnHandler = (e) => {
		e.preventDefault()
		navigate("/")
	}

	return (
		<React.Fragment>
			<div className="back-page p-4">
				<Back title="Back" buttonClickHandler={(e) => {e.preventDefault();submitHandler(id, parseInt(question_id), {}, parseInt(questionIndex)-1 < 0 ? navigate("/home") : parseInt(questionIndex)-1, "Back")}}/>
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
							{choices.map((choice, index) =>
								<div className="form-check mb-2">
									<input className="form-check-input" ref={el => choiceRef.current[choice.id] = el} checked={checkedState[index]}  id={choice.id} type="checkbox" onClick={(e) => checkClickHandler(e, index)}/>
									<label className="form-check-label font-24" for="check1">{choice.choice_text}</label>
								</div>
							)}
						</div>
						<div className="mt-4">
							<Button classes="btn btn-primary me-5" title="Next" buttonClickHandler={() => submitHandler(id, question_id, choicesAnswers, parseInt(questionIndex) == ctxHome.survey.length - 1 ? parseInt(questionIndex) : parseInt(questionIndex)+1, parseInt(questionIndex) == ctxHome.survey.length - 1 ? "last_question" : "Next")}/>							
						</div>
					</div>
					<div className="activity-img">
						<img src={require('../../assets/images/activity_1.png')} className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Question;