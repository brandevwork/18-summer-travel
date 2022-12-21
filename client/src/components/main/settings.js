import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/UI/button';

function Settings(props)	{
	return (
		<div className="main-wrapper">
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
                  <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" />
                  <div className="cross-icon"></div>
                </div>
                <div>Family</div>
              </div>

              <div className="name-age-grid justify-content-center align-items-center mb-2">
                <div className="text-center">Name</div>
                <div className="text-center">Age</div>
                <div className="text-center font-11">Include in<br/> Survey</div>
              </div>

              <div className="name-age-grid justify-content-center align-items-center mb-2">
                <div>
                  <div className="cross-field">
                    <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" />
                    <div className="cross-icon"></div>
                  </div>
                </div>
                <div className="age">
                  <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="45" />
                </div>
                <div className="ms-3">
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="name-age-grid justify-content-center align-items-center mb-2">
                <div>
                  <div className="cross-field">
                    <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" />
                    <div className="cross-icon"></div>
                  </div>
                </div>
                <div className="age">
                  <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="45" />
                </div>
                <div className="ms-3">
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="name-age-grid justify-content-center align-items-center mb-2">
                <div>
                  <div className="cross-field">
                    <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" />
                    <div className="cross-icon"></div>
                  </div>
                </div>
                <div className="age">
                  <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="45" />
                </div>
                <div className="ms-3">
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="name-age-grid justify-content-center align-items-center mb-2">
                <div>
                  <div className="cross-field">
                    <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" />
                    <div className="cross-icon"></div>
                  </div>
                </div>
                <div className="age">
                  <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="45" />
                </div>
                <div className="ms-3">
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="name-age-grid justify-content-center align-items-center mb-2">
                <div>
                  <div className="cross-field">
                    <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" />
                    <div className="cross-icon"></div>
                  </div>
                </div>
                <div className="age">
                  <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="45" />
                </div>
                <div className="ms-3">
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="name-age-grid justify-content-center align-items-center mb-2">
                <div>
                  <div className="cross-field">
                    <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="Shanon" />
                    <div className="cross-icon"></div>
                  </div>
                </div>
                <div className="age">
                  <input type="text"className="form-control" name="" id="" aria-describedby="helpId" placeholder="45" />
                </div>
                <div className="ms-3">
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
	)
}

export default Settings;