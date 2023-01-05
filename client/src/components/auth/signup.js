import React,{ useState, useRef, useMemo, useReducer, useEffect, useContext } from 'react';
import Input from '../UI/input';
import { NavLink, useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import Modal from "../UI/modal";
import signupReducer from "../../reducer/signupReducer";
import Welcome from './welcome'
import AskUser from './askUser'
import AskUserFirstName from './askUserFirstname'
import AskFamily from './askFamily'
import AfterKid from './afterKid'
import BeforeAge from './beforeAge'
import ConfirmAge from './confirmAge'
import PickAge from './pickAge'
import PickKid from './pickKid'
import SaveBeforeSignup from './saveBeforeSignup'
import Setup from './setup'
import SignUpSection from './signupSection'

let isInitial = true;


function SignUp(props)  {
  const [fromSubmit, setFromSubmit] = useState(false)
  let regex = /^[a-zA-Z ]*$/;
  const ctxAuth = useContext(AuthContext);
  const [renderState, setRenderState] = useState(ctxAuth.familyMemberState.save ? 'signupSection':'welcome');
  const [familyMemberState, setFamilyMemberState] = useState(ctxAuth.familyMemberState.save ? ctxAuth.familyMemberState : {});
  
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const zipRef = useRef();

  
  const initialAuthState = {name: "", email: "", password:"", address:"", city:"", state:"", country:"", zip:"", error: false, errorMessage: [""]};
  const [authState, dispatch] = useReducer(signupReducer, initialAuthState);

  const {fetchDataHandler: sendData, loading: authLoading} = useData();
  const navigate = useNavigate();
  const navigateHandler = (e) => {
    navigate(e);
  }

  const submitHandler = async(e) => {
    setFromSubmit(true)
    e.preventDefault();
    await dispatch({type:"SUBMIT", firstname: firstnameRef.current.value, lastname: lastnameRef.current.value, 
    	email: emailRef.current.value, 
    	password: passwordRef.current.value, 
    	address: addressRef.current.value,
    	city: cityRef.current.value, state: stateRef.current.value, 
    	country: countryRef.current.value, zip: zipRef.current.value});
  }

  const getAuthData = async(data, headers) => {
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
      await localStorage.setItem("jti", data.data.jti);
      await localStorage.setItem("id", data.data.id);
      await localStorage.setItem("email", emailRef.current.value);
      await localStorage.setItem("name", firstnameRef.current.value+""+lastnameRef.current.value);
      await localStorage.setItem("token", headers.get('Authorization'));
      nextClickHandler("setup",{
        "family":{id: data.data.id,"first_name":firstnameRef.current.value, "last_name":lastnameRef.current.value,
          "email":emailRef.current.value, "token":headers.get('Authorization'),"notification":""}
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
      if(renderState == 'signupSection' && fromSubmit){

        if(authState.firstname == "")
          firstnameRef.current.style.border = "1px solid red";
        else{
          if(regex.test(authState.firstname)) {
            firstnameRef.current.style.border = "0.5px solid #C6C6C8";
          }
          else
           firstnameRef.current.style.border = "1px solid red";
        }
        if(authState.lastname == "")
          lastnameRef.current.style.border = "1px solid red";
        else{
          if(regex.test(authState.lastname)) {
            lastnameRef.current.style.border = "0.5px solid #C6C6C8";
          }
          else
           lastnameRef.current.style.border = "1px solid red";
        }
        if(authState.email == "")
          emailRef.current.style.border = "1px solid red";
        else
          emailRef.current.style.border = "0.5px solid #C6C6C8";
        if(authState.address == "")
          addressRef.current.style.border = "1px solid red";
        else
          addressRef.current.style.border = "0.5px solid #C6C6C8";
        if(authState.city == "")
          cityRef.current.style.border = "1px solid red";
        else
          cityRef.current.style.border = "0.5px solid #C6C6C8";
        if(authState.state == "")
          stateRef.current.style.border = "1px solid red";
        else
          stateRef.current.style.border = "0.5px solid #C6C6C8";
        if(authState.country == "")
          countryRef.current.style.border = "1px solid red";
        else
          countryRef.current.style.border = "0.5px solid #C6C6C8";
        if(authState.password == "")
          passwordRef.current.style.border = "1px solid red";
        else
          passwordRef.current.style.border = "0.5px solid #C6C6C8";
        if(authState.zip == "")
          zipRef.current.style.border = "1px solid red";
        else
          zipRef.current.style.border = "0.5px solid #C6C6C8";
      }
      if (!authState.error && authState.email !== '' && authState.password !== '') {
        sendData(`${process.env.REACT_APP_SERVER_URL}families`, {
        method: 'POST',
        body: JSON.stringify({"family":{
        	"first_name":firstnameRef.current.value, "last_name":lastnameRef.current.value,
        	"email":emailRef.current.value, "password":passwordRef.current.value, "password_confirmation":passwordRef.current.value,
        	"address":addressRef.current.value, "city":cityRef.current.value, "state":stateRef.current.value,
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
  }, [authState, fromSubmit])

  useEffect(()=>{
    ctxAuth.saveWork(familyMemberState)
  },[familyMemberState])

  const nextClickHandler = ($$state, data = null) => {
  	setRenderState($$state)
  	if (data) {
  		for (const keys in data) {
  			setFamilyMemberState(prevState => {return {...prevState, [keys]: data[keys]}})
			}
  	}
  }

  return (
  	<React.Fragment>
    	{renderState === 'welcome' && <Welcome nextClickHandler={nextClickHandler}/>}
    	{renderState === 'askUser' && <AskUser nextClickHandler={nextClickHandler}/>}
    	{renderState === 'askUserFirstname' && <AskUserFirstName familyMemberState={familyMemberState}  nextClickHandler={nextClickHandler}/>}
    	{renderState === 'askFamily' && <AskFamily familyMemberState={familyMemberState} nextClickHandler={nextClickHandler}/>}
    	{renderState === 'pickKid' && <PickKid nextClickHandler={nextClickHandler}/>}
    	{renderState === 'afterKid' && <AfterKid nextClickHandler={nextClickHandler} familyMemberState={familyMemberState}/>}
    	{renderState === 'before_age' && <BeforeAge nextClickHandler={nextClickHandler} familyMemberState={familyMemberState}/>}
    	{renderState === 'pickAge' && <PickAge firstnameRef={firstnameRef} nextClickHandler={nextClickHandler} familyMemberState={familyMemberState}/>}
    	{renderState === 'confirmAge' && <ConfirmAge familyMemberState={familyMemberState} nextClickHandler={nextClickHandler}/>}
    	{renderState === 'saveBeforeSignup' && <SaveBeforeSignup familyMemberState={familyMemberState} nextClickHandler={nextClickHandler}/>}
    	{renderState === 'signupSection' && <SignUpSection 
    		firstnameRef={firstnameRef} 
    		lastnameRef={lastnameRef}
    		emailRef={emailRef}
    		passwordRef={passwordRef}
    		addressRef={addressRef}
    		cityRef={cityRef}
    		stateRef={stateRef}
    		countryRef={countryRef}
    		zipRef={zipRef}
    		submitHandler={submitHandler}
        nextClickHandler={nextClickHandler}
        authState = {authState}
        authLoading = {authLoading}
  		/>}
    	{renderState === 'setup' && <Setup familyMemberState={familyMemberState} nextClickHandler={nextClickHandler}/>}
    </React.Fragment>
  )
}

export default SignUp;