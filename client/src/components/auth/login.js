import React, { useRef, useEffect, useReducer, useContext } from 'react';
import Input from '../UI/input';
import Button from '../UI/button';
import Back from '../UI/back';
import HomeBtn from '../UI/homeBtn';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import Modal from "../UI/modal";
import loginReducer from "../../reducer/loginReducer";

let isInitial = true;

function Login() {
	const ctxAuth = useContext(AuthContext);
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();
	const location = useLocation();
	
	const navigateHandler = (e) => {
		navigate(e);
	}

	const initialAuthState = { email: "", password:"", error: false, errorMessage: []};
  const [authState, dispatch] = useReducer(loginReducer, initialAuthState);
	
	const submitHandler = async(e) => {
    e.preventDefault();
    await dispatch({type:"SUBMIT", email: emailRef.current.value, password: passwordRef.current.value });
  }

  const {fetchDataHandler: sendData, loading: authLoading} = useData();
  const getAuthData = async(data, headers) => {
  	if (data.error) {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.error});
  		return;
  	}
  	if (!data.data) {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.message})
  	}
  	if (data.status.code == "400") {
  		dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.status.message})
  	}
  	if(data.status.code == "200"){
  		await ctxAuth.login({"name": data.data.first_name+" "+data.data.last_name, "email": data.data.email, "id": data.data.id,"token": headers.get('Authorization'), "notification": data.status.message});
    	navigateHandler('/');
  	}
  }

	useEffect(() => {
		emailRef.current.focus();
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(!isInitial) {
      if (!authState.error && authState.email !== '' && authState.password !== '') {
      	sendData(`${process.env.REACT_APP_SERVER_URL}families/sign_in`, {
	      method: 'POST',
			  body: JSON.stringify({"family":{"email":emailRef.current.value, "password":passwordRef.current.value}}),
			  headers: {
			    'Content-Type': 'application/json',
			    'x-mock-match-request-body': true,
			  }
			},
		  getAuthData);
      	// navigateHandler('/main');
      }
    }
  }, [authState, sendData])

	const backHandler = (e) => {
		e.preventDefault()
		navigate("/")
	}

	const createHandler = (e) => {
		e.preventDefault()
		navigate("/signup")
	}
	

	return (
		<React.Fragment>
	    <div className="back-page">
	      <Back title="Back" buttonClickHandler={backHandler}/>
	    </div>
	    {authLoading && <Modal>Please Wait ...</Modal>}
	    <form onSubmit={submitHandler}>
	      {authState.error && 
	        <ul className="text-danger list-group">
	          {authState.errorMessage.map((eachMessage, index) => (
	            <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
	            ))}
	        </ul>
	      }
	      <div className="center-content mx-auto welcome-intro">
	        <div className="content-grid">
	          <div className="d-flex justify-content-center flex-column">
	            <h2 className="m-0 primary-clr">Welcome Back!</h2>
	            <h2>
	              Please login to return to your family survey.
	            </h2>
	            <div className="login-wrapper d-flex flex-column mt-2">
	              <div className="cross-field mb-3">
	                <Input ref={emailRef} input={{"type":"email", "placeholder":"Email Address", 
	      						"className":"form-control"}}/>
	                <div className="cross-icon"></div>
	              </div>
	              <div className="cross-field mb-5">
	                <Input ref={passwordRef} input={{"type":"password", "placeholder":"Strong Password",
	      		 				"className":"form-control"}}/>
	                <div className="cross-icon"></div>
	              </div>
	            </div>
	            <div>
	            <Button classes="btn btn-primary" title="Go to Survey Home" type="submit"/>
	            <Button classes="btn btn-primary" title="Create Account" buttonClickHandler={createHandler} />
	            </div>
	          </div>
	          <div>
	            <img src={require('../../assets/images/login-cat.svg').default} className="img-fluid" alt="" />
	          </div>
	        </div>
	      </div>
	    </form>
    </React.Fragment>
	)
}

export default Login;