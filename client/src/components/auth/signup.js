import React,{ useState, useRef, useMemo, useReducer, useEffect, useContext } from 'react';
import Input from '../UI/Input';
import { NavLink, useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/auth-context";
import Modal from "../UI/Modal";
import signupReducer from "../../reducer/signupReducer";
import Welcome from './welcome'
import AskUser from './ask_user'
import AskUserFirstName from './ask_user_firstname'
import AskFamily from './ask_family'
import AfterKid from './after_kid'
import BeforeAge from './before_age'
import ConfirmAge from './confirm_age'
import PickAge from './pick_age'
import PickKid from './pick_kid'
import SaveBeforeSignup from './save_before_signup'
import Setup from './setup'
import SignUpSection from './signup_section'

let isInitial = true;


function SignUp(props)  {

  const [renderState, setRenderState] = useState('welcome');
  const [familyMemberState, setFamilyMemberState] = useState({});
  
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const zipRef = useRef();

  const ctxAuth = useContext(AuthContext);
  
  const initialAuthState = {name: "", email: "", password:"", street:"", city:"", state:"", country:"", zip:"", error: false, errorMessage: [""]};
  const [authState, dispatch] = useReducer(signupReducer, initialAuthState);

  const {fetchDataHandler: sendData, loading: authLoading} = useData();
  const navigate = useNavigate();
  const navigateHandler = (e) => {
    navigate(e);
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    await dispatch({type:"SUBMIT", firstname: firstnameRef.current.value, lastname: lastnameRef.current.value, 
    	email: emailRef.current.value, 
    	password: passwordRef.current.value, 
    	street: streetRef.current.value, 
    	city: cityRef.current.value, state: stateRef.current.value, 
    	country: countryRef.current.value, zip: zipRef.current.value});
  }

  const getAuthData = async(data) => {
    if (data.error) {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.error});
      return;
    }
    if (!data.data) {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.message})
    }
    else{
      await ctxAuth.signup({"name": data.data.firstname+" "+data.data.last_name, "email": data.data.email});
      // navigateHandler('/');
      nextClickHandler("setup")
    }
  }
  
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (!isInitial) {
      if (!authState.error && authState.email !== '' && authState.password !== '') {
        sendData(`${process.env.REACT_APP_SERVER_URL}users`, {
        method: 'POST',
        body: JSON.stringify({"family":{
        	"first_name":firstnameRef.current.value, "last_name":lastnameRef.current.value,
        	"email":emailRef.current.value, "password":passwordRef.current.value, "password_confirmation":passwordRef.current.value,
        	"street":streetRef.current.value, "city":cityRef.current.value, "state":stateRef.current.value,
        	"country":countryRef.current.value, "zip":zipRef.current.value, "number_of_family_members": familyMemberState.family_member,"family_members":familyMemberState.family_members
       	}}),
        headers: {
          'Content-Type': 'application/json',
          // 'x-mock-match-request-body': false
        }
      },
      getAuthData);
        // navigateHandler('/main');
      }
    }
  }, [authState])

  const nextClickHandler = ($$state, data = null) => {
  	setRenderState($$state)
  	if (data) {
  		for (const keys in data) {
  			setFamilyMemberState(prevState => {return {...prevState, [keys]: data[keys]}})
			}
  	}
  }

  return (
  	<div>
	  	{authState.error && 
	      <ul className="text-danger list-group">
	        {authState.errorMessage.map((eachMessage, index) => (
	          <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
	          ))}
	      </ul>
	    }
    	{renderState === 'welcome' && <Welcome nextClickHandler={nextClickHandler}/>}
    	{renderState === 'ask_user' && <AskUser nextClickHandler={nextClickHandler}/>}
    	{renderState === 'ask_user_firstname' && <AskUserFirstName firstnameRef={firstnameRef} nextClickHandler={nextClickHandler}/>}
    	{renderState === 'ask_family' && <AskFamily familyMemberState={familyMemberState} nextClickHandler={nextClickHandler}/>}
    	{renderState === 'pick_kid' && <PickKid nextClickHandler={nextClickHandler}/>}
    	{renderState === 'after_kid' && <AfterKid nextClickHandler={nextClickHandler} familyMemberState={familyMemberState}/>}
    	{renderState === 'before_age' && <BeforeAge nextClickHandler={nextClickHandler}/>}
    	{renderState === 'pick_age' && <PickAge firstnameRef={firstnameRef} nextClickHandler={nextClickHandler} familyMemberState={familyMemberState}/>}
    	{renderState === 'confirm_age' && <ConfirmAge nextClickHandler={nextClickHandler}/>}
    	{renderState === 'save_before_signup' && <SaveBeforeSignup nextClickHandler={nextClickHandler}/>}
    	{renderState === 'signup_section' && <SignUpSection 
    		firstnameRef={firstnameRef} 
    		lastnameRef={lastnameRef}
    		emailRef={emailRef}
    		passwordRef={passwordRef}
    		streetRef={streetRef}
    		cityRef={cityRef}
    		stateRef={stateRef}
    		countryRef={countryRef}
    		zipRef={zipRef}
    		submitHandler={submitHandler}
  		/>}
    	{renderState === 'setup' && <Setup nextClickHandler={nextClickHandler}/>}
    </div>
  )
}

export default SignUp;