import React, { useState, useEffect, useReducer, useContext } from 'react';
import { useNavigate, useParams, useLocation, } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";
import Question from "./question";
import QuestionKids from "./questionKids";
import Category from "./category";
import FinishSurvey from "./finishSurvey";

function Survey()	{

	const { id } = useParams();
	const ctxUser = useContext(AuthContext);
	const ctxHome = useContext(HomeContext);
	const navigate = useNavigate();

	const [lastQuestion, setLastQuestion] = useState(false)
	const [questionPicture, setQuestionPicture] = useState(null)
	const [questionPictureColor, setQuestionPictureColor] = useState(0)
	const [currAge, setCurrAge] = useState(0)
	const [currFamilyId, setCurrFamilyId] = useState(0)
	const [currName, setCurrName] = useState('')
	
	const [questionIndex, setQuestionIndex] = useState(0);
	const [questionIndexTemp, setQuestionIndexTemp] = useState(0);

	const initialHomeState = { familyError: false, surveyError: false, questionSavedError: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
	
	const {fetchDataHandler: sendDataMember, loading: homeLoadingMember} = useData();
	const {fetchDataHandler: sendDataSurvey, loading: homeLoadingSurvey} = useData();
	const {fetchDataHandler: sendDataSurveySaved, loading: homeLoadingSurveySaved} = useData();
  
  const setFamilyMemebers = async(data) => {
  	if (data.error) {
  		dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.error});
  		return;
  	}
  	if (!data) {
  		dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.message})
  	}
  	if (data.status == "400") {
  		dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.status.message})
  	}
  	if(data.status == "ok"){
  		await ctxHome.getAllFamilyMembers(data.data.family,data.status);
  	}
  }

  const getAuthData = async(data) => {
  	if (data.error) {
  		dispatch({type: "SERVER_ERROR", surveyError: true, errorMessage:data.error});
  		return;
  	}
  	if (!data) {
  		dispatch({type: "SERVER_ERROR", surveyError: true, errorMessage:data.message})
  	}
  	if (data.status == "400") {
  		dispatch({type: "SERVER_ERROR", surveyError: true, errorMessage:data.status.message})
  	}
  	if(data.length > 0){
  		await ctxHome.getSurveyByMember(data, id);
    	// navigateHandler('/');
  	}
  }

  const questionSaved = async(data) => {
  	if (data.error) {
  		dispatch({type: "SERVER_ERROR", questionSavedError: true, errorMessage:data.error});
  		return;
  	}
  	if (!data) {
  		dispatch({type: "SERVER_ERROR", questionSavedError: true, errorMessage:data.message})
  	}
  	if (data.status == "400") {
  		dispatch({type: "SERVER_ERROR", questionSavedError: true, errorMessage:data.message})
  	}
  	if(data.status == "200"){
  		let resData = {"family_member_id": id, "question_id":data.data.question_id, "choice_ids":data.data.choice_ids}
  		await ctxHome.saveSurvey(resData);
  	}
  }

  // useEffect(()=>{
  // 	setQuestionIndex(questionIndexTemp)
  // },[ctxHome])

  useEffect(()=>{
  	if(ctxHome.family.length > 0) {
			let currFamily = ctxHome.family.filter(f => f.id == id);
			setCurrAge(currFamily[0].age);
			setCurrName(currFamily[0].name);
			setCurrFamilyId(currFamily[0].family_id);
		}
  },[ctxHome.family])

	useEffect(() => {
    if(homeState.questionSavedError){
    	if(questionIndex > 0)
    		setQuestionIndex(questionIndex-1)
    }
    if(homeState.familyError){
    	ctxHome.setNotifications(homeState.errorMessage)
    	navigate("/home")
    }
    if(homeState.surveyError){
    	ctxHome.setNotifications(homeState.errorMessage)
    	navigate("/home")
    }
    if(Object.keys(ctxHome.survey).length > 0 && ctxHome.currFamilyMemberId == id){
    	// setQuestionPicture(ctxHome.survey.findIndex(s => s.choices[0].category == 'Destinations: Europe'))
    	// setQuestionPictureColor(ctxHome.survey.findIndex(s => s.choices[0].category == 'Destinations: Europe'))

    	setQuestionPicture(ctxHome.survey.findIndex(s => s.question_type == 'destination'))
    	setQuestionPictureColor(ctxHome.survey.findIndex(s => s.question_type == 'destination'))
    	return;
    }
    if(!homeState.familyError && !homeState.surveyError && !homeState.questionSavedError ) {
      if (ctxUser.id !== '' && ctxHome.family.length > 0) {
      	sendDataSurvey(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members/${id}`, {
	      method: 'GET',
			  headers: {
			    "Content-Type": "application/json",
			    Authorization: localStorage.getItem("token"),
			  },
			},
		  getAuthData);
      	// navigateHandler('/main');
      } else {
      	sendDataMember(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members`, {
		      method: 'GET',
				  headers: {
				    "Content-Type": "application/json",
				    Authorization: localStorage.getItem("token"),
				  },
				},
			  setFamilyMemebers);
      }
    }
  }, [homeState, ctxHome, sendDataMember, sendDataSurvey, id])

  const finishSurvey = async() => {
  	ctxHome.finishSurvey()
		navigate("/home")
	}

  const submitHandler = async(family_id, question_id, choices, questionIndex, fromWhere="Next") => {
  	console.log(questionPicture)
  	console.log("questionPicture")
  	console.log(questionIndex)
  	console.log("questionIndex")
  	console.log(question_id)
  	console.log(Object.assign({},choices))
  	console.log("question_id")
  	// await setQuestionData({"family_member_id": family_id, "question_id":question_id, "choice_ids":choices})
  	if (fromWhere == 'Category') {setQuestionPicture("category")}
  	if (fromWhere == 'Finish') {setLastQuestion(false)}
  	if (fromWhere == 'Next' || fromWhere == 'last_question') {
			await sendDataSurveySaved(`${process.env.REACT_APP_SERVER_URL}api/v1/member_preferences`, {
		    method: 'POST',
		    body: JSON.stringify({"family_id": parseInt(currFamilyId), "family_member_id": parseInt(family_id), "question_id": parseInt(question_id), "preference_ids": Object.assign({},choices)}),
			  headers: {
			    "Content-Type": "application/json",
			    Authorization: localStorage.getItem("token"),
			  },
			}, questionSaved);
			if(fromWhere == 'last_question')
  			// await finishSurvey()
  			setLastQuestion(true)
  	}
  	await setQuestionIndex(questionIndex)
  }

	return (
		<React.Fragment>
		{homeState.questionSavedError && 
      <ul className="text-danger list-group">
        {homeState.errorMessage.map((eachMessage, index) => (
          <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
          ))}
      </ul>
    }
		{homeLoadingMember && <Modal>Please wait! Member is initializing ...</Modal>}
		{homeLoadingSurvey && <Modal>Please wait! Survey Data is being fetched ...</Modal>}
		{
			currAge > 14  ?
				ctxHome.survey.length > 0 &&
					ctxHome.survey.slice(questionIndex,questionIndex+1).map((question, ind) =>
						questionPicture !== null && questionPicture !== questionIndex && !(lastQuestion) ?
						 <Question homeLoadingSurveySaved={homeLoadingSurveySaved} currName={currName} questionPictureColor={questionPictureColor}  heading={question.heading} subheading={question.subheading} boldtext={question.boldtext} question_image={question.question_image} questionIndex={questionIndex} question_id={question.id} question_text={question.text} choices={question.choices}  submitHandler={submitHandler} />
						:
						!(lastQuestion) ?
							<Category homeLoadingSurveySaved={homeLoadingSurveySaved} heading={question.heading} subheading={question.subheading} boldtext={question.boldtext} question_image={question.question_image} questionIndex={questionIndex} question_id={question.id} question_text={question.text} choices={question.choices}  submitHandler={submitHandler}/>	
						:
							<FinishSurvey currName={currName} heading={question.heading} subheading={question.subheading} boldtext={question.boldtext} question_image={question.question_image} questionIndex={questionIndex} question_id={question.id} question_text={question.text} choices={question.choices}  submitHandler={submitHandler}/>	
					)
			:
			ctxHome.survey.length > 0 &&
					ctxHome.survey.slice(questionIndex,questionIndex+1).map(question =>
						!lastQuestion ?
						<QuestionKids homeLoadingSurveySaved={homeLoadingSurveySaved} currName={currName} questionIndex={questionIndex} question_id={question.id} question_text={question.text} choices={question.choices.filter(c => c.name !== 'Winery' && c.name !== 'Night Life')}  submitHandler={submitHandler} />
						:
						<FinishSurvey currName={currName} heading={question.heading} subheading={question.subheading} boldtext={question.boldtext} question_image={question.question_image} questionIndex={questionIndex} question_id={question.id} question_text={question.text} choices={question.choices}  submitHandler={submitHandler}/>	
					)
		}
		</React.Fragment>
	)
}

export default Survey;