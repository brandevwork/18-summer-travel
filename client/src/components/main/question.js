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

function Question({homeLoadingSurveySaved, questionIndex, questionPictureColor, currName, heading ,question_image, question_text, question_id, choices, submitHandler})	{
	const colorBackgrounds = ["#FFA500", "#92C46D", "#ED6641", "#F5D801", "#356EFD", "#F19D38", "#EA502D", "#92C46D", "#59C6F1","#EA502D", "#356EFD"]
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
    let ids = ctxHome.survey[localSurvey].choices.map(eachChoice => typeof eachChoice.answer !== 'undefined' ? eachChoice.id.toString() : null)
    var filtered = ids.filter(function (el) {
		  return el != null;
		});
    if(filtered.length > 0) 
    	setChoicesAnswers(filtered)
    else
    	setChoicesAnswers([])
	},[question_id])

	const btnHandler = (e) => {
		e.preventDefault()
		navigate("/")
	}

	const  capitalizeFirstLetter = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
	}
	const replaceName= (text) => {
		let startIndex = null;
		let endIndex = null;
		text = text.replace("{name}", capitalizeFirstLetter(currName));
		if(heading !== null) {
			if (text.indexOf(heading) !== -1) {
				 startIndex = text.indexOf(heading)
				 endIndex = startIndex + heading.length - 1
			}
		}
		if(startIndex && endIndex !== null)
			return <h2>{text.slice(0,startIndex)}<b>{text.slice(startIndex,endIndex+1)}</b>{text.slice(endIndex+1, text.length-1)}</h2>
		else
			return <h2>{text}</h2>
	}
	return (
		<React.Fragment>
			<div className="back-page p-4">
				<Back title="Back" buttonClickHandler={(e) => {e.preventDefault();submitHandler(id, parseInt(question_id), {}, parseInt(questionIndex)-1 < 0 ? navigate(`/lets_start/${id}`) : parseInt(questionIndex)-1, "Back")}}/>
			</div>
			<div className="center-content mx-auto">
				<div className="content-grid">
					<div className="d-flex justify-content-center flex-column">
							{replaceName(question_text)}
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
							<Button classes="btn btn-primary me-5" disabled={homeLoadingSurveySaved ? true : false} title={homeLoadingSurveySaved ? `Submitting...` : `Next`} buttonClickHandler={() => submitHandler(id, question_id, choicesAnswers, parseInt(questionIndex) == ctxHome.survey.length - 1 ? parseInt(questionIndex) : parseInt(questionIndex)+1, parseInt(questionIndex) == ctxHome.survey.length - 1 ? "last_question" : "Next")}/>							
						</div>
					</div>
					<div className="activity-img">
					<div style={{"color" : "#ffffff","textAlign":"center",  "backgroundColor":colorBackgrounds[questionIndex-parseInt(questionPictureColor)], "fontSize":"26px", "marginBottom":'10px'}}>{heading === null ? heading : heading.toUpperCase() }</div>
						<img src={question_image} className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Question;