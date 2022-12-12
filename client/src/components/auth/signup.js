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
  const addressRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const zipRef = useRef();

  const ctxAuth = useContext(AuthContext);
  
  const initialAuthState = {name: "", email: "", password:"", address:"", street:"", city:"", state:"", country:"", zip:"", error: false, errorMessage: [""]};
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
    	address: addressRef.current.value, 
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
    if(data.status.code == "400") {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.status.message})
    }
    if(data.status.code == "200"){
      // await ctxAuth.signup({"name": firstnameRef.current.value+" "+lastnameRef.current.value, "email": data.data.email, "notification":data.status.message});
      // navigateHandler('/');
      await localStorage.setItem("id", data.data.id);
      await localStorage.setItem("email", emailRef.current.value);
      await localStorage.setItem("name", firstnameRef.current.value+""+lastnameRef.current.value);
      nextClickHandler("setup",{
        "family":{id: data.data.id,"first_name":firstnameRef.current.value, "last_name":lastnameRef.current.value,
          "email":emailRef.current.value,"notification":data.status.message}
      })

    } else {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.status.message});
      return;
    }
  }
  
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (!isInitial) {
      if (!authState.error && authState.email !== '' && authState.password !== '') {
        sendData(`${process.env.REACT_APP_SERVER_URL}families`, {
        method: 'POST',
        body: JSON.stringify({"family":{
        	"first_name":firstnameRef.current.value, "last_name":lastnameRef.current.value,
        	"email":emailRef.current.value, "password":passwordRef.current.value, "password_confirmation":passwordRef.current.value,
        	"address":addressRef.current.value,"street":streetRef.current.value, "city":cityRef.current.value, "state":stateRef.current.value,
        	"country":countryRef.current.value, "zip":zipRef.current.value, "number_of_family_member": parseInt(familyMemberState.family_member),"family_members_attributes":familyMemberState.family_members
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
    	{renderState === 'welcome' && <Welcome nextClickHandler={nextClickHandler}/>}
    	{renderState === 'ask_user' && <AskUser nextClickHandler={nextClickHandler}/>}
    	{renderState === 'ask_user_firstname' && <AskUserFirstName familyMemberState={familyMemberState}  nextClickHandler={nextClickHandler}/>}
    	{renderState === 'ask_family' && <AskFamily familyMemberState={familyMemberState} nextClickHandler={nextClickHandler}/>}
    	{renderState === 'pick_kid' && <PickKid nextClickHandler={nextClickHandler}/>}
    	{renderState === 'after_kid' && <AfterKid nextClickHandler={nextClickHandler} familyMemberState={familyMemberState}/>}
    	{renderState === 'before_age' && <BeforeAge nextClickHandler={nextClickHandler}/>}
    	{renderState === 'pick_age' && <PickAge firstnameRef={firstnameRef} nextClickHandler={nextClickHandler} familyMemberState={familyMemberState}/>}
    	{renderState === 'confirm_age' && <ConfirmAge familyMemberState={familyMemberState} nextClickHandler={nextClickHandler}/>}
    	{renderState === 'save_before_signup' && <SaveBeforeSignup nextClickHandler={nextClickHandler}/>}
    	{renderState === 'signup_section' && <SignUpSection 
    		firstnameRef={firstnameRef} 
    		lastnameRef={lastnameRef}
    		emailRef={emailRef}
    		passwordRef={passwordRef}
    		addressRef={addressRef}
        streetRef={streetRef}
    		cityRef={cityRef}
    		stateRef={stateRef}
    		countryRef={countryRef}
    		zipRef={zipRef}
    		submitHandler={submitHandler}
        nextClickHandler={nextClickHandler}
        authState = {authState}
  		/>}
    	{renderState === 'setup' && <Setup familyMemberState={familyMemberState} nextClickHandler={nextClickHandler}/>}
    </div>
  )
}

export default SignUp;