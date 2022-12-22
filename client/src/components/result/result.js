import React from 'react';
import { useNavigate } from 'react-router-dom'
import Back from '../../components/UI/back'

function Result()	{
  const navigate = useNavigate()
	return (
    <React.Fragment>
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
              <a name="" id="" className="btn btn-primary d-inline-flex align-items-center justify-content-center" href="./results_recommendations_19.html" role="button">
                <img src={require('../../assets/images/print-icon.svg').default} className="me-1" alt="" />
                Print Results
              </a>
              <a name="" id="" className="btn btn-primary d-inline-flex align-items-center justify-content-center" href="#" role="button">
                <img src={require('../../assets/images/email-icon.svg').default} className="me-1" alt="" />
                Email Results
              </a>
            </div>
          </div>
        </div>
        <div className="result-grid">
          <div className="table-wrap">
            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-purple"></div>
                <div className="bar bar-purple"></div>
                <div className="bar bar-purple"></div>
                <div className="bar bar-purple"></div>
                <div className="bar bar-purple"></div>
                <div className="bar bar-purple"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-orange"></div>
                <div className="bar bar-orange"></div>
                <div className="bar bar-orange"></div>
                <div className="bar bar-orange"></div>
                <div className="bar bar-orange"></div>
                <div className="bar bar-orange"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
                <div className="bar bar-green"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-yellow"></div>
                <div className="bar bar-yellow"></div>
                <div className="bar bar-yellow"></div>
                <div className="bar bar-yellow"></div>
                <div className="bar bar-yellow"></div>
                <div className="bar bar-yellow"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-blue"></div>
                <div className="bar bar-blue"></div>
                <div className="bar bar-blue"></div>
                <div className="bar bar-blue"></div>
                <div className="bar bar-blue"></div>
                <div className="bar bar-blue"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
                <div className="bar bar-zinc"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="table-grid">
              <div className="table-row">
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
                <div className="bar bar-red"></div>
              </div>
              <div className="table-row">
                <div>Shannon (48)</div>
                <div>Paul (54)</div>
                <div>Emilia (17)</div>
                <div>Everett (14)</div>
                <div>Erin (9)</div>
                <div>Jeff (3)</div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" />
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input m-0" id="check1" name="option1" value="something" checked="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rightsidebar">
            <section>
              <h4 className="font-bold">ACTIVITIES</h4>
              <ul>
                <li><a href="">Go to a spa: get a massage</a></li>
                <li><a href="">Enjoy the sun: Work on your suntan</a></li>
                <li><a href="">Go shopping</a></li>
                <li><a href="">Visit a winery</a></li>
                <li><a href="">Take cooking classNamees</a></li>
                <li><a href="">Experience the city night life</a></li>
                <li><a href="">Visit Theme Parks</a></li>
                <li><a href="">Go to a Water Park</a></li>
                <li><a href="">Visit a Zoo or Aquarium</a></li>
                <li><a href="">Go Walking or Exploring</a></li>
                <li><a href="">Seeing art and cool sculptures</a></li>
                <li><a href="">Visiting interesting museums</a></li>
                <li><a href="">Learning about local culture and history</a></li>
                <li><a href="">Have a tour guide show us around</a></li>
                <li><a href="">Experience local festivals, events and parades</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">ENVIRONMENT</h4>
              <ul>
                <li><a href="">City Destinations (Rome, Paris, Chicago, etc.)</a></li>
                <li><a href="">The Beach</a></li>
                <li><a href="">Countryside and Farmland</a></li>
                <li><a href="">National Parks</a></li>
                <li><a href="">Tourist Destinations (Big Ben, Eiffel Tower, etc.)</a></li>
                <li><a href="">Road Trips</a></li>
                <li><a href="">Be in Nature</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">SPORTING ACTIVITIES</h4>
              <ul>
                <li><a href="">Golfing</a></li>
                <li><a href="">Hiking</a></li>
                <li><a href="">Biking</a></li>
                <li><a href="">Water Sports (Swimming, Snorkeling)</a></li>
                <li><a href="">Mountain Skiing</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS: EUROPE</h4>
              <ul>
                <li><a href="">Vienna, Austria</a></li>
                <li><a href="">Paris, France</a></li>
                <li><a href="">South of France (here, here)</a></li>
                <li><a href="">Berlin, Germany</a></li>
                <li><a href="">Hamburg, Germany</a></li>
                <li><a href="">Munich, Germany</a></li>
                <li><a href="">Athens, Greece</a></li>
                <li><a href="">Reykavick, Iceland</a></li>
                <li><a href="">Florence, Italy</a></li>
                <li><a href="">Rome, Italy</a></li>
                <li><a href="">Venice, Italy</a></li>
                <li><a href="">Amsterdam, Netherlands</a></li>
                <li><a href="">Barcelona, Spain</a></li>
                <li><a href="">The Alps, Switzerland</a></li>
                <li><a href="">Multi-City River Crusie</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS: UK & IRELAND</h4>
              <ul>
                <li><a href="">London, England</a></li>
                <li><a href="">Dublin, Ireland</a></li>
                <li><a href="">Irish Countryside, Ireland (Cliffs of Moher)</a></li>
                <li><a href="">Edinburgh, Scotland</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS:  AFRICA</h4>
              <ul>
                <li><a href="">Cairo, Egypt (The Pyramids)</a></li>
                <li><a href="">Marrakesh, Morocco</a></li>
                <li><a href="">Cape Town, Sout Africa (Safari)</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS:  SOUTH AMERICA</h4>
              <ul>
                <li><a href="">Rio de Janeiro, Brazil</a></li>
                <li><a href="">Galápogos Islands, Ecuador</a></li>
                <li><a href="">Machu Picchu, Peru (Inca Ruins)</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS: CENTRAL AMERICA</h4>
              <ul>
                <li><a href="">Costa Rica (Rain Forest)</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS: OCEANIA</h4>
              <ul>
                <li><a href="">Sydney, Australia</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS: UNITED STATES</h4>
              <ul>
                <li><a href="">Boston, MA</a></li>
                <li><a href="">New York, NY</a></li>
                <li><a href="">Washington, DC</a></li>
                <li><a href="">Orlando, FL</a></li>
                <li><a href="">Sarasota, FL</a></li>
                <li><a href="">Key West, FL</a></li>
                <li><a href="">Chicago, IL</a></li>
                <li><a href="">Colorado Springs, CO</a></li>
                <li><a href="">Grand Canyon,</a></li>
                <li><a href="">Los Angelos, CA</a></li>
                <li><a href="">Napa, CA</a></li>
                <li><a href="">San Francisco, CA</a></li>
                <li><a href="">National Parks</a></li>
                <li><a href="">Alaska</a></li>
                <li><a href="">Alaska Cruise</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS: MEXICO</h4>
              <ul>
                <li><a href="">Cabo</a></li>
                <li><a href="">Cancun</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS: CARIBBEAN</h4>
              <ul>
                <li><a href="">Barbados</a></li>
                <li><a href="">Caribbean</a></li>
                <li><a href="">Caribbean Cruise (on Cruise Ship)</a></li>
              </ul>
            </section>

            <section>
              <h4 className="font-bold">DESTINATIONS: CANADA</h4>
              <ul>
                <li><a href="">Montreal</a></li>
                <li><a href="">Torongo</a></li>
                <li><a href="">Vancouver</a></li>
              </ul>
            </section>
            
            <section>
              <h4 className="font-bold">DESTINATIONS: BERMUDA</h4>
              <ul>
                <li><a href="">Hamilton, Bermuda</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
	)
}

export default Result;