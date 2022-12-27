import React, { Component, useRef, useEffect, useReducer, useContext, useState } from 'react';
import Back from '../UI/back';
import { NavLink, useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import Modal from "../UI/modal";
import homeReducer from "../../reducer/homeReducer";



let colors = ['bar-zinc', 'bar-purple', 'bar-green', 'bar-orange', 'bar-red', 'bar-blue', 'bar-yellow']

class ComponentToPrint extends Component	{

  calculateCheck = (ques, allChoices) => {
    const found = allChoices.findIndex(sd => sd.id == ques.id)
    if(found > -1)
      return true
    else
      return false
  }

  render() {
    let acticityQuestions = this.props.acticityQuestions
    let ctxHomeResults = this.props.ctxHomeResults
  	return (
      <React.Fragment>
        <div className="center-content mx-auto">
          <div  className="result-grid" >
            <div className="table-wrap">
              {Object.keys(acticityQuestions).length > 0 &&
              Object.keys(acticityQuestions).map((es,ind) => 
                <>
                <div className="table-grid">
                  <tr className="table-row">
                  {
                    Object.keys(ctxHomeResults).length &&
                    Array.from(ctxHomeResults).map((ress) => 
                      <td className={`bar ${colors[ind%7]}`}></td>
                    )
                  }
                  </tr>
                </div>
                <div className="table-grid">
                  <tr>
                  {
                    Object.keys(ctxHomeResults).length &&
                    Array.from(ctxHomeResults).map(ress => 
                      <td>>{ress.name} ({ress.age})</td>
                    )
                  }
                  <td>{es}</td>
                  </tr>
                  {acticityQuestions[es].map(ques =>
                    <tr className="table-row">
                    {
                      Object.keys(ctxHomeResults).length &&
                      Array.from(ctxHomeResults).map((ress) => 
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input m-0" checked={this.calculateCheck(ques, ress.choices)} id="check1" name="option1" value="something" />
                          </div>
                        </td>
                      )
                    }
                    <td>{ques.choice_text}</td>  
                    </tr>
                  )}
                </div>
                </>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
  	);
  }
};

export default ComponentToPrint;

