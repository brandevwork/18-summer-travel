import React, { useState, useRef, useEffect, useReducer, useContext } from 'react';
import Input from '../UI/input';
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";
import Question from "./question";
import QuestionKids from "./questionKids";

function Survey()	{
	let isInitial = true;

	const { id } = useParams();
	const ctxUser = useContext(AuthContext);
	const ctxHome = useContext(HomeContext);
	const location = useLocation();

	const [currAge, setCurrAge] = useState(0)
	

	const [questionData, setQuestionData] = useState({"family_member_id": id, "question_id": 1, "choice_ids":{}});
	const [questionIndex, setQuestionIndex] = useState(0);

	const initialHomeState = { family_members:{}, error: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
	
	const {fetchDataHandler: sendData, loading: homeLoading} = useData();
  
  const setFamilyMemebers = async(data) => {
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
    	sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members/${id}`, {
	      method: 'GET',
			  headers: {
			    "Content-Type": "application/json",
			    Authorization: localStorage.getItem("token"),
			  },
			},
		  getAuthData);
  	}
  }

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
  	if(data.length > 0){
  		await ctxHome.getSurveyByMember(data);
    	// navigateHandler('/');
  	}
  }

  const questionSaved = async(data) => {
  	console.log(data)
  	console.log("data sur")
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
  	if(data.status == "200"){
  		// await ctxHome.saveSurvey(questionData);
    	// navigateHandler('/');
  	}
  }

  useEffect(()=>{
  	if(questionData.choice_ids.length > 0)
  		ctxHome.saveSurvey(questionData);
  },[questionData])

  useEffect(()=>{
  	if(ctxHome.family.length > 0) {
			let currFamily = ctxHome.family.filter(f => f.id == id);
			setCurrAge(currFamily[0].age);
		}
  },[ctxHome.family])

	useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(!isInitial) {
      if (ctxUser.id !== '' && ctxHome.family.length > 0) {
      	sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members/${id}`, {
	      method: 'GET',
			  headers: {
			    "Content-Type": "application/json",
			    Authorization: localStorage.getItem("token"),
			  },
			},
		  getAuthData);
      	// navigateHandler('/main');
      } else {
      	sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members`, {
		      method: 'GET',
				  headers: {
				    "Content-Type": "application/json",
				    Authorization: localStorage.getItem("token"),
				  },
				},
			  setFamilyMemebers);
      }
    }
  }, [homeState, sendData])

  const submitHandler = async(family_id, question_id, choices, questionIndex, fromWhere="Next") => {
  	console.log(question_id)
  	console.log(choices)
  	console.log("question_id")
  	await setQuestionData({"family_member_id": family_id, "question_id":question_id, "choice_ids":choices})
  	await setQuestionIndex(questionIndex)
  	if (fromWhere == 'Next') {
			sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/response_choices`, {
		    method: 'POST',
		    body: JSON.stringify({"family_member_id": family_id, "question_id": question_id, "choice_ids": choices}),
			  headers: {
			    "Content-Type": "application/json",
			    Authorization: localStorage.getItem("token"),
			  },
			}, questionSaved);
  	}
  }

	return (
		<div>
		{
			currAge > 14  ?
				ctxHome.survey.length > 0 &&
					ctxHome.survey.slice(questionIndex,questionIndex+1).map(question =>
						<Question questionIndex={questionIndex} question_id={question.id} question_text={question.question_text} choices={question.choices}  submitHandler={submitHandler} />
					)
			:
			ctxHome.survey.length > 0 &&
					ctxHome.survey.slice(questionIndex,questionIndex+1).map(question =>
						<QuestionKids questionIndex={questionIndex} question_id={question.id} question_text={question.question_text} choices={question.choices}  submitHandler={submitHandler} />
					)
		}
		</div>
	)
}

export default Survey;