import React, { useContext, useReducer, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/UI/button';
import HomeContext from "../../store/homeContext";
import useData from "../../hooks/useData";
import homeReducer from "../../reducer/homeReducer";
import AuthContext from "../../store/authContext";
import Modal from "../UI/modal";



function Settings(props)	{
  const ctxUser = useContext(AuthContext);
  const ctxHome = useContext(HomeContext);
  const initialHomeState = { family_members:{}, error: false, errorMessage: []};
  const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);
  const {fetchDataHandler: sendData, loading: homeLoading} = useData();
  const {fetchDataHandler: sendDataReset, loading: homeLoadingReset} = useData();
  const {fetchDataHandler: sendDataActive, loading: homeLoadingActive} = useData();
  const [checkedState, setCheckedState] = useState(
    new Array(ctxHome.family.length).fill(true)
  );
  const [familyMemberId, setFamilyMemberId] = useState(0)
  
  const getAuthData = async(data) => {
    if (data.error) {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.error});
      return;
    }
    if (!data.data) {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.message})
    }
    if (data.status == "400") {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.status.message})
    }
    if(data.status == "ok"){
      await ctxHome.getAllFamilyMembers(data.data.family,data.status);
      // navigateHandler('/');
    }
  }

  const getAuthDataReset = async(data) => {
    if (data.error) {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.error});
      return;
    }
    if (!data.data) {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.message})
    }
    if (data.status == "400") {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.status.message})
    }
    if(data.status == "200"){
      await ctxHome.finishSurvey();
      // navigateHandler('/');
    }
  }

  const getAuthDataActive = async(data) => {
    if (data.error) {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.error});
      return;
    }
    if (!data.data) {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.message})
    }
    if (data.status == "400") {
      dispatch({type: "SERVER_ERROR", error: true, errorMessage:data.status.message})
    }
    if(data.status == "ok"){
      // navigateHandler('/');
    }
  }

  useEffect(() => {
    if(familyMemberId > 0)
      ctxHome.updateMemberStatus(familyMemberId);
    if(ctxHome.family.length > 0) {
      let currStatus = ctxHome.family.map(m=>m.is_active)
      setCheckedState(currStatus)
      return  
    }
    if (ctxUser.id !== '') {
      sendData(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    },
    getAuthData);
      // navigateHandler('/main');
    }
  }, [homeState, sendData, ctxHome.family])

  const resetSurveyHandler = (e) => {
    let value = e.target.checked
    if(value) {
      sendDataReset(`${process.env.REACT_APP_SERVER_URL}api/v1/settings/reset_survey`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      },
      getAuthDataReset);
    } 
  }

  const checkClickHandler = async(e, position, family_id) => {
      setFamilyMemberId(family_id)
      sendDataActive(`${process.env.REACT_APP_SERVER_URL}api/v1/family_members/${family_id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      },
      getAuthDataActive);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }

	return (
		<div className="main-wrapper">
    {homeLoading && <Modal>Please wait! Family members are being fetched ...</Modal>}
    {homeLoadingActive && <Modal>Please wait! This member status is being updated ...</Modal>}
    {homeLoadingReset && <Modal>Please wait! Survey is being reset ...</Modal>}
    <div className="settings-page">
      <div className="back-page">
        <NavLink to="/" className="d-flex align-items-center p-4">
          <div className="d-flex">
            <img src={require('../../assets/images/arrow.svg').default} className="img-fluid me-1" alt="" />
          </div>
          Main Page
        </NavLink>
  
        <div className="setting-grid">
          <div>
            <div className="d-flex">
              <div className="summer-heading default-heading d-flex align-items-center">
                Settings
              </div>
            </div>
            <div className="yellow-card setting-card mt-3">
              <h4 className="text-center">Setting</h4>
              <div className="d-flex align-items-center  my-3">
                <div className="text-end pe-4 font-bold font-17">
                  Show children past the age of 18 on Recommendation Page
                </div>
                <div>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="d-flex align-items-center  my-3 justify-content-end">
                <div className="text-end pe-4 d-flex align-items-center font-bold font-17">
                  <span className="ms-3">
                    <img src={require('../.././assets/images/caution-icon.svg').default} alt="" />
                  </span>
                  Turn off “safe for travel” icon recommendations.
                </div>
                <div>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <div>
                <h5 className="mt-5 pt-3 text-center">Home Address</h5>
                <div className="cross-field w-100 mt-3">
                  <textarea name="" id="" cols="30" rows="3"></textarea>
                  <div className="cross-icon"></div>
                </div>
              </div>

              <div className="d-flex align-items-center my-3 share-info font-17">
                <div className="text-center pe-4 d-flex align-items-center">
                  Share my information with my local AAA Travel Advisor
                </div>
                <div>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

            </div>
          </div>
          <div>
            <div className="yellow-card family-card me-3">
              <h4 className="text-center">Family settings</h4>
              <div className="d-flex align-items-center gap-2 justify-content-center my-3">
                <div>The</div>
                <div className="cross-field">
                  <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" value={localStorage.getItem('name')} />
                  <div className="cross-icon"></div>
                </div>
                <div>Family</div>
              </div>

              <div className="name-age-grid justify-content-center align-items-center mb-2">
                <div className="text-center">Name</div>
                <div className="text-center">Age</div>
                <div className="text-center font-11">Include in<br/> Survey</div>
              </div>
              {ctxHome.family.length > 0 && ctxHome.family.map((member, index)  => {
                return (<div className="name-age-grid justify-content-center align-items-center mb-2">
                  <div>
                    <div className="cross-field">
                      <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" value={member.name} />
                      <div className="cross-icon"></div>
                    </div>
                  </div>
                  <div className="age">
                    <input type="text"className="form-control" name="" id="" aria-describedby="helpId" value={member.age} />
                  </div>
        
                  <div className="ms-3">
                    <label className="switch">
                      <input type="checkbox" onClick={(e) => checkClickHandler(e, index, member.id)} checked={checkedState[index]} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>)
              })}

              <div className="survey-date-wrapper my-2">
                <div className="d-flex align-items-center gap-2">
                  <div>Survey Started:</div>
                  <div>June 23, 2022</div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>Survey Finished:</div>
                  <div>September 25, 2022</div>
                </div>                
                <div className="text-center mt-2" >
                  *Children under 4 years old are <br/> automatically excluded from the survey.
                </div>
              </div>
              <div className="ms-3">
              Reset Survey&nbsp;&nbsp;
                <label className="switch">
                  <input type="checkbox" onClick={(e) => resetSurveyHandler(e)}  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
	)
}

export default Settings;