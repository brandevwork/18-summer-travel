import React from 'react';

function Endorsement()	{
	return (
    <div className="main-wrapper">
    <div className="welcome-screens family-results recommendations">
      <div className="back-page">
        <a href="./welcome_intro_5.html" className="d-flex align-items-center p-4">
          <div className="d-flex">
            <img src={require('../../assets/images/back-arrow.svg').default} className="img-fluid me-1" alt="" />
          </div>
          <div className="back-text">Back</div>
        </a>
      </div>
      <div className="center-content mx-auto">
        <div className="result-header">
          <div className="d-flex flex-column justify-content-center">
            <p className="font-17 mt-3 mb-0">Scroll To See Your Recommendations. Print a copy and send via email.</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
            <div className="font-17 lh-1 my-2">See Results</div>
            <div>
              <a name="" id="" className="btn btn-primary d-inline-flex align-items-center justify-content-center" href="#" role="button">
                <img src={require('../../assets/images/print-icon.svg').default} className="me-1" alt="" />
                Print Recommendations
              </a>
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
                <img  src={require('../../assets/images/recom-cat.svg').default} className="me-1" alt="" />
              </div>
              <div>
                <h2 className="m-0">Jones Family - 18 Summers</h2>
                <h2 className="m-0">Family Travel Recommendations</h2>
                <span className="font-13 m-1">As of September 25, 2022</span>
              </div>
              <div className="result-logo">
                <img src={require('../../assets/images/logo.svg').default} className="me-1 img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="tiles-wrapper mb-4">
            <span className="dot-first"></span>
            <div className="tiles-grid shade1">
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Rome, Italy Orlando, FL
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                  <div className="d-flex flex-column">Erin <span>(9)</span></div>
                  <div className="d-flex flex-column">Jeff <span>(3)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Paris, France New York, NY
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                  <div className="d-flex flex-column">Erin <span>(9)</span></div>
                  <div className="d-flex flex-column">Jeff <span>(3)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Cairo, Egypt Colorado Springs, CO
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                  <div className="d-flex flex-column">Erin <span>(9)</span></div>
                  <div className="d-flex flex-column">Jeff <span>(3)</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="tiles-wrapper mb-4">
            <div className="tiles-grid shade2">
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Rome, Italy Orlando, FL
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                  <div className="d-flex flex-column">Erin <span>(9)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Paris, France New York, NY
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                  <div className="d-flex flex-column">Erin <span>(9)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Cairo, Egypt Colorado Springs, CO
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                  <div className="d-flex flex-column">Erin <span>(9)</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="tiles-wrapper mb-4">
            <div className="tiles-grid shade3">
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Rome, Italy Orlando, FL
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Paris, France New York, NY
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Cairo, Egypt Colorado Springs, CO
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="tiles-wrapper mb-4">
            <div className="tiles-grid shade4">
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Rome, Italy Orlando, FL
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Paris, France New York, NY
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Cairo, Egypt Colorado Springs, CO
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="tiles-wrapper mb-4">
            <div className="tiles-grid shade5">
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Rome, Italy Orlando, FL
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Paris, France New York, NY
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Cairo, Egypt Colorado Springs, CO
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                  <div className="d-flex flex-column">Everett <span>(14)</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="tiles-wrapper mb-4">
            <span className="dot-last"></span>
            <div className="tiles-grid shade6">
              <div className="dgrid">
                <div className="year">2023</div>
                <div className="tile">
                  Rome, Italy Orlando, FL
                </div>
                <div className="names d-flex justify-content-evenly px-2 text-center">
                  <div className="d-flex flex-column">Emilia <span>(17)</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-links mt-5 px-3">
        <div className="d-flex align-items-center">
          <a href="./index.html" className="d-flex align-items-center me-4">
            <div className="d-flex">
              <img src={require('../../assets/images/home-icon.svg').default} className="img-fluid me-1" alt="" />
            </div>
            Home
          </a>
          <a href="" className="d-flex align-items-center">
            <div className="d-flex">
              <img src={require('../../assets/images/info-icon.svg').default} className="img-fluid me-1" alt="" />
            </div>
            Instructions
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Endorsement;
