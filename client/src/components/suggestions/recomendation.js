import React, { useRef,useEffect, useReducer, useContext, useState } from 'react';
import Back from '../UI/back';
import { NavLink, useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";
import ReactToPrint from 'react-to-print';



function Recomendation()	{
  const printRef = useRef(null);
  const navigate = useNavigate();
  const ctxUser = useContext(AuthContext);
  const ctxHome = useContext(HomeContext);

  const initialHomeState = { recomendationError: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
  
  const {fetchDataHandler: sendData, loading: recLoading} = useData();
  const {fetchDataHandler: sendDataFamily, loading: familyLoading} = useData();
  
  const getAuthData = async(data) => {
    if (data.error) {
      dispatch({type: "SERVER_ERROR", recomendationError: true, errorMessage:data.error});
      return;
    }
    if (!data) {
      dispatch({type: "SERVER_ERROR", recomendationError: true, errorMessage:data.message})
      return;
    }
    if (data.status == "400") {
      dispatch({type: "SERVER_ERROR", recomendationError: true, errorMessage:data.message})
      return;
    }
    if (data.status == "204") {
      ctxHome.setNotifications([data.message])
      navigate("/")
    }
    if(data.data){
      await ctxHome.getRecomendations(data.data);
    }
  }
    const getAuthDataFamily = async(data) => {
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
    }
  }

  useEffect(() => {
    if(typeof ctxHome.recomendations === 'object')
      ctxHome.recomendations = Object.values(ctxHome.recomendations)
    if(ctxHome.recomendations.length > 0){
      return
    }
    if (ctxUser.id !== '' && !homeState.recomendationError) {
      if (ctxUser.id !== '' && ctxHome.family.length > 0) {
        sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/recomendation`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        },
        getAuthData)
      } else {
        sendDataFamily(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        },
        getAuthDataFamily)
      }


    }
  }, [homeState, sendData, ctxHome.recomendations])  

	return (
    <div ref={printRef}>
    {recLoading && <Modal>Please wait! Results are being fetched ...</Modal>}
      {ctxHome.notification.length > 0 && 
        <ul className="text-danger list-group">
          {ctxHome.notification.map((eachMessage, index) => (
            <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
            ))}
        </ul>
      }
      {homeState.recomendationError && 
        <ul className="text-danger list-group">
          {homeState.errorMessage.map((eachMessage, index) => (
            <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
            ))}
        </ul>
      }
      <div className="back-page">
        <Back title="Back" buttonClickHandler={(e) => {e.preventDefault();navigate("/")}}/>
      </div>
      <div className="center-content mx-auto" ref={printRef}>
        <div className="result-header">
          <div className="d-flex flex-column justify-content-center">
            <p className="font-17 mt-3 mb-0">Scroll To See Your Recommendations. Print a copy and send via email.</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
            <div className="font-17 lh-1 my-2">See Results</div>
            <div>
            <ReactToPrint
                trigger={() => <button name="" id="" className="btn btn-primary d-inline-flex align-items-center justify-content-center me-3"  role="button">
                <img src={require('../../assets/images/print-icon.svg').default} className="me-1" alt="" />
                Print Recommendations
              </button>}
                content={() => printRef.current}
              />
              <a name="" id="" className="btn btn-primary d-inline-flex align-items-center justify-content-center" href="#" role="button">
                <img src={require('../../assets/images/email-icon.svg').default} className="me-1" alt="" />
                Email Results
              </a>
            </div>
          </div>
        </div>
        <div className="result-grid">
          <div className="top-section mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img  src={require('../../assets/images/recom-cat.svg').default} className="me-1 img-fluid" alt="" />
              </div>
              <div>
                <h2 className="m-0">Jones Family - 18 Summers</h2>
                <h2 className="m-0">Family Travel Recommendations</h2>
              </div>
              <div className="result-logo">
                <img src={require('../../assets/images/logo.svg').default} className="me-1 img-fluid" alt="" />
              </div>
            </div>
          </div>
          
                {Object.values(ctxHome.recomendations).length > 0 &&
                <div className="tiles-wrapper mb-4">
                  <span className="dot-first"></span>
                  <div className="tiles-grid shade1">
                {Object.values(ctxHome.recomendations).map((value,ind) =>
                  <>{ind%3 ==0 ? <span className="dot-first"></span> : ""} 
                      <div className="dgrid">
                        <div className="year">{2023 + ind}</div>
                        <div className="tile">
                          {value[0]}
                          <br/>
                          {value[1]}
                        </div>
                         <div class="names d-flex justify-content-evenly px-2 py-4 text-center">
                         {Object.keys(ctxHome.family).length > 0 &&
                            Object.keys(ctxHome.family).filter(fil => ctxHome.family[fil].age < 18).map(key =>
                              parseInt(ctxHome.family[key].age) + ind <= 18 ?  
                              <div class="d-flex flex-column">{ctxHome.family[key].name} <span>({parseInt(ctxHome.family[key].age) +ind})</span></div>
                              :
                              ''
                            )
                          }
                        </div>
                      </div></>)}
                  </div>
                </div>}
          
        </div>
      </div>
    </div>
  )
}

export default Recomendation;
