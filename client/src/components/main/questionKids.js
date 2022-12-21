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

function QuestionKids({questionIndex, question_text, question_id, choices, submitHandler})	{

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
	const [start,setStart] = useState(0)
	const [end,setEnd] = useState(4)

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

	const btnHandler = (e, btn) => {
		e.preventDefault()
		if(btn =='next') {
			if(end < choices.length){
				setStart(start+1)
				setEnd(end+1)	
			}
		}
		if(btn =='prev') {
			if(start > 0) {
				setStart(start-1)
				setEnd(end-1)
			}
		}
	}

	const finishSurvey = () => {
		ctxHome.finishSurvey()
		navigate("/home")
	}

	return (

		<div className="main-wrapper">
      <div className="welcome-screens">
        <div className="back-page p-4">
          <Back title="Back" buttonClickHandler={(e) => {e.preventDefault();submitHandler(id, parseInt(question_id), {}, parseInt(questionIndex)-1 < 0 ? navigate("/home") : parseInt(questionIndex)-1, "Back")}}/>
        </div>

        <div className="center-content mx-auto">
          <div className="content-grid">
            <div className="d-flex justify-content-center flex-column">
              <div className="slide-heading">
                <div className="pe-4 mt-5">
                  <h2>
                    What do you like to do when on vacation?
                  </h2>
                  <p className="font-23">
                    Check all the things you like to do!
                  </p>
                </div>
                <div>
                  <img src={require('../../assets/images/vacation.png').default} className="img-fluid" alt="" />
                </div>
              </div>
              <div id="carouselExampleControls" className="carousel custom-carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                  
                  {choices.slice(start,end).map((choice, index) =>
	                  <div className="carousel-item">
	                    <div className="card">
	                      <div className="img-wrapper">
	                        <img src={choice.choice_image}  alt="Slide" />
	                      </div>
	                      <div className="card-body">
	                        <div className="form-check mb-2">
	                          <input ref={el => choiceRef.current[choice.id] = el} type="checkbox" onClick={(e) => checkClickHandler(e, parseInt(index)+parseInt(start))} className="form-check-input" id={choice.id}  name="option1" value="something" checked={checkedState[index+start]} />
	                          <label className="form-check-label font-24" for="check1"></label>
	                        </div>
	                        <h5 className="card-title">{choice.choice_text}</h5>
	                      </div>
	                    </div>
	                  </div>
									)}
                </div>
                <button className="carousel-control-prev" onClick={(e) => btnHandler(e,"prev")} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" onClick={(e) => btnHandler(e,"next")} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="mt-4 d-flex justify-content-center">
                <Button classes="btn btn-primary me-5" title="Next" buttonClickHandler={() => submitHandler(id, question_id, choicesAnswers, parseInt(questionIndex) == ctxHome.survey.length - 1 ? finishSurvey() : parseInt(questionIndex)+1)}/>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-links mt-5 px-3">
          <div className="d-flex align-items-center">
            <HomeBtn title="Home" buttonClickHandler={btnHandler}/>
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

export default QuestionKids;