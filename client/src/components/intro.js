import React, { useContext, useState, useEffect, useReducer } from 'react';
import Button from './UI/button';
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/authContext";
import HomeContext from "../store/homeContext";
import useData from "../hooks/useData";
import homeReducer from "../reducer/homeReducer";


function Intro() {
  const allEqual = arr => arr.every( v => v === arr[0] )
  const[title, setTitle] = useState('Start The Survey');
  const[showResults, setShowResults] = useState(false);
  const ctxAuth = useContext(AuthContext);
  const ctxHome = useContext(HomeContext);
  const navigate = useNavigate();
  const buttonHandler = (param) => {
    navigate(param)
  }

  const initialHomeState = { familyError: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
  
  const {fetchDataHandler: sendData, loading: homeLoading} = useData();
  
  const getAuthData = async(data) => {
    if (data.error) {
      dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.error});
      return;
    }
    if (!data) {
      dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.message})
      return;
    }
    if (data.status == "400") {
      dispatch({type: "SERVER_ERROR", familyError: true, errorMessage:data.status.message})
      return;
    }
    if(data.status == "ok"){
      await ctxHome.getAllFamilyMembers(data.data.family,data.status);
      // navigateHandler('/');
    }
  }

  useEffect(() => {
    if ((ctxAuth.id !== '' || localStorage.getItem("id") !=='') && !homeState.familyError) {
      sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    },
    getAuthData);
    }
  }, [homeState, sendData])

  useEffect(()=>{
    if(typeof ctxHome.family === 'object'){
      ctxHome.family = Object.values(ctxHome.family)
    }
    if(ctxHome.family.length > 0){
      let ch = ctxHome.family.map(f => f.age > 4 ? f.survey_status : 'completed');
      if (allEqual(ch))
        setShowResults(true)
      if (ch.includes('in_progress')) 
        setTitle('Finish The Survey')
      else
        setTitle("Start The Survey")
    }
    else
    setTitle("Start The Survey")

  },[ctxHome])

	return (
    <React.Fragment>
      {ctxAuth.notification !== "" && 
        <ul className="text-danger list-group">
            <li className="list-group-item list-group-item-danger" key={Math.random()}>{ctxAuth.notification}</li>
        </ul>
      }
      {ctxHome.notification.length > 0 && 
        <ul className="text-danger list-group">
          {ctxHome.notification.map((eachMessage, index) => (
            <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
            ))}
        </ul>
      }
      <div className="d-flex justify-content-end">
        <div className="logo">
          <img src={require('../assets/images/logo.svg').default} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="d-flex position-relative">
        <div>
          <div className="summer-heading d-flex align-items-center">
            <img src={require('../assets/images/tour-guide-cat.svg').default} className="img-fluid" alt="" />
            18 Summers Travel Tool
          </div>
          <div className="clearfix"></div>
          <div className="planing-family">
            <h3>Planning of Your Family's “18 Summers” of Vacations</h3>
          </div>
        </div>
        <div className="sparkling-star-wrapper">
          <div className="star d-flex justify-content-center align-items-center">
            <img src={require('../assets/images/star.svg').default} className="img-fluid" alt="" />
            <span>Find your family's<br/> perfect vacation <br/>plans with feedback<br/> from your whole<br/> family!</span>
          </div>
        </div>
      </div>
      <div className="banner-grid">
        <div className="cats3">
          <img src={require('../assets/images/3cats.svg').default} className="img-fluid" alt="" />
        </div>
        <div className="right-buttons mb-3 ms-md-0 ms-lg-5 d-flex align-items-center">
          <div className="d-flex flex-column align-items-center">
            {ctxAuth.email === '' &&
              <>
                <div>
                  <Button classes="btn btn-primary mb-3" title="Start The Survey" buttonClickHandler={() => {buttonHandler('login')}}/>
                </div>
              </>
            }
            {ctxAuth.email !== '' &&
              <>
              {!showResults && 
                <div>
                  <Button classes="btn btn-primary mb-3" title={title} buttonClickHandler={() => {buttonHandler('home')}}/>
                </div>
              }
                {showResults && 
                  <div>
                    <Button classes="btn btn-primary mb-3" title="Survey Results" buttonClickHandler={() => {buttonHandler('/result')}}/>
                  </div>
                }              
                
                <div>
                  <Button classes="btn btn-primary" title="View Recomendations" buttonClickHandler={() => {buttonHandler('/recomendation')}}/>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;
