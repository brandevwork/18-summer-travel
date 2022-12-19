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
		<div>
			<p>{question_text}</p><br/>
			{choices.map((choice, index) => 
				<><input ref={el => choiceRef.current[choice.id] = el} checked={checkedState[index]}  id={choice.id} type="checkbox" onClick={(e) => checkClickHandler(e, index)}/>{choice.choice_text}<br/></>
			)}
			<Button title="Back" buttonClickHandler={() => submitHandler(id, parseInt(question_id)-2, {})}/>
			<Button title="Next" buttonClickHandler={() => submitHandler(id, question_id, choicesAnswers)}/>
		</div>
	)
}

export default Question;