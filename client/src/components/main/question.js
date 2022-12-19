import React, { useRef, useEffect, useReducer, useContext } from 'react';
import Input from '../UI/input';
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";
import Button from "../UI/button";

function Question({question_text, question_id, choices,submitHandler})	{

	const { id } = useParams();
	const ctxUser = useContext(AuthContext);
	const ctxHome = useContext(HomeContext);
	const location = useLocation();

	return (
		<div>
			<p>{question_text}</p><br/>
			{choices.map(choice => 
				<p>{choice.text}</p>
			)}
			<Button title="Next" buttonClickHandler={() => submitHandler(question_id)}/>
		</div>
	)
}

export default Question;