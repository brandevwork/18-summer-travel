import React, { useRef, useEffect, useReducer, useContext, useState } from 'react';
import Back from '../UI/back';
import { NavLink, useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import ComponentToPrint from "./componentToPrint";
import homeReducer from "../../reducer/homeReducer";
import ReactToPrint from 'react-to-print';



let colors = ['bar-zinc', 'bar-purple', 'bar-green', 'bar-orange', 'bar-red', 'bar-blue', 'bar-yellow']

function Result() {
  const printRef = useRef(null);
  const navigate = useNavigate();
  const ctxUser = useContext(AuthContext);
  const ctxHome = useContext(HomeContext);
  const [acticityQuestions, setActicityQuestions] = useState({});

  const initialHomeState = { resultError: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
  
  const {fetchDataHandler: sendData, loading: resultLoading} = useData();
  
  const getAuthData = async(data) => {
    if (data.error) {
      dispatch({type: "SERVER_ERROR", resultError: true, errorMessage:data.error});
      return;
    }
    if (!data) {
      dispatch({type: "SERVER_ERROR", resultError: true, errorMessage:data.message})
      return;
    }
    if (data.status == "400") {
      dispatch({type: "SERVER_ERROR", resultError: true, errorMessage:data.message})
      return;
    }
    if (data.status == "204") {
      ctxHome.setNotifications([data.message])
      navigate("/")
      // dispatch({type: "SERVER_ERROR", resultError: true, errorMessage:data.message})
      return;
    }
    if(data.length > 0){
      await ctxHome.getResults(data);
    }
  }

  useEffect(() => {
    if(typeof ctxHome.family === 'object')
      ctxHome.family = Object.values(ctxHome.family)
    if(Object.keys(acticityQuestions).length > 0)
      return
    if (ctxHome.results.length > 0) {
      let ch = ctxHome.results.map(r => r.choices.map(c => c))
      ch = ch.flat(1)
      ch = ch.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.choice === value.choice
        ))
      )
      let res = ch.reduce(function (r, a) {
          r[a.choice_type] = r[a.choice_type] || [];
          r[a.choice_type].push(a);
          return r;
      }, Object.create(null));
      console.log(res)
      console.log("res")
      setActicityQuestions(res)
    }
    if (ctxUser.id !== '' && !homeState.resultError && !(ctxHome.results.length > 0)) {
      sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/results`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    },
    getAuthData)}
  }, [homeState, sendData, ctxHome.results, acticityQuestions])

  const calculateCheck = (ques, allChoices) => {
    const found = allChoices.findIndex(sd => sd.choice == ques.choice)
    if(found > -1)
      return true
    else
      return false
  }

  return (
    <React.Fragment>
    {resultLoading && <Modal>Please wait! Results are being fetched ...</Modal>}
      {ctxHome.notification.length > 0 && 
        <ul className="text-danger list-group">
          {ctxHome.notification.map((eachMessage, index) => (
            <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
            ))}
        </ul>
      }
      {homeState.resultError && 
        <ul className="text-danger list-group">
          {homeState.errorMessage.map((eachMessage, index) => (
            <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
            ))}
        </ul>
      }
      <div className="back-page">
        <Back title="Back" buttonClickHandler={(e) => {e.preventDefault();navigate("/")}}/>
      </div>
      <div className="center-content mx-auto">
        <div className="result-header">
          <div className="d-flex">
            <div className="family-icon">
              <img src={require('../../assets/images/family-result.svg').default} alt="" />
            </div>
            <div className="d-flex flex-column justify-content-end">
              <h2 className="m-0 lh-1">Family Results</h2>
              <p className="font-23 m-0">Here is how each family member voted! (Sept 2022)</p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
            <div className="font-17 lh-1 my-2">See Recommendations</div>
            <div>
            <ReactToPrint
        trigger={() => <button name="" id="" className="btn btn-primary d-inline-flex align-items-center justify-content-center me-3" role="button">
                <img src={require('../../assets/images/print-icon.svg').default} className="me-1" alt="" />
                Print Results
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
        <div  className="result-grid" >
          <div className="table-wrap">
            
            {Object.keys(acticityQuestions).length > 0 &&
            Object.keys(acticityQuestions).map((es,ind) => 
              <>
              <div className="table-grid">
                <div className="table-row">
                <div className="result-wrap">
                {
                  Object.keys(ctxHome.results).length &&
                  Array.from(ctxHome.results).map((ress) => 
                    <div className={`bar ${colors[ind%7]}`}></div>
                  )
                }
                 {ctxHome.family.length > 0 &&
                  ctxHome.family.filter(f => f.age < 4).map(ft => 
                   <div className={`bar ${colors[ind%7]}`}></div>
                )}
                </div>
                </div>
              </div>
              <div className="table-grid">
                <div className="table-row">
                <div className="result-wrap">
                {
                  Object.keys(ctxHome.results).length &&
                  Array.from(ctxHome.results).map(ress => 
                    <div>{ress.name} ({ress.age})</div>
                  )
                }
                {ctxHome.family.length > 0 &&
                  ctxHome.family.filter(f => f.age < 4).map(ft => 
                  <div>{ft.name}({ft.age})</div>
                )}
                </div>
                <div className="rightbarhead">
                  <h4 className="font-bold">{es}</h4>
                </div>
                </div>
                {acticityQuestions[es].map((ques,indChild) =>
                  <div className="table-row">
                  <div className="result-wrap">
                  {
                    Object.keys(ctxHome.results).length &&
                    Array.from(ctxHome.results).map((ress) => 
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input m-0" checked={calculateCheck(ques, ress.choices)} id="check1" name="option1" value="something" />
                        </div>
                    )
                  } 
                  {ctxHome.family.length > 0 &&
                    ctxHome.family.filter(f => f.age < 4).map(ft =>
                        <div className="form-check">
                          <input style={{'background':'#BDBDBD'}} type="checkbox" className="form-check-input m-0" checked={false} disabled={true} id="check1" name="option1" value="something" disabled={true}/>
                        </div>
                  )}
                  </div>
                    <div className="rightsidelink"> 
                      <a href="">{ques.choice}</a>
                    </div>
                  </div>
                )}
              </div>
              </>
            )}
          </div>
          <div style={{ display: "none" }}>
             <ComponentToPrint acticityQuestions={acticityQuestions} ctxHomeResults={ctxHome.results} ctxHomeFamily={ctxHome.family} ref={printRef} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Result;