import React from 'react';

function QuestionKid()	{
	return (
    <div className="main-wrapper">
    <div className="welcome-screens">
      <div className="back-page p-4">
        <a href="./index.html">
          <div className="d-flex align-items-center">
            <div><img src={require('../../assets/images/back-arrow.svg').default} className="img-fluid me-1" alt="" /></div>
            <div className="back-text">Back</div>
          </div>
        </a>
      </div>

      <div className="center-content mx-auto">
        <div className="content-grid">
          <div className="d-flex justify-content-center flex-column">
            <div className="slide-heading">
              <div className="pe-4 mt-5">
                <h2>
                  What do you like to do when on vacation?
                </h2>
                <p className="font-23">
                  Check all the things you like to do!
                </p>
              </div>
              <div>
                <img src={require('../../assets/images/vacation.png').default} className="img-fluid" alt="" />
              </div>
            </div>
            <div id="carouselExampleControls" className="carousel custom-carousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card">
                    <div className="img-wrapper">
                      <img src={require('../../assets/images/slide-1.png').default} alt="Slide" />
                    </div>
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked="" />
                        <label className="form-check-label font-24" for="check1"></label>
                      </div>
                      <h5 className="card-title">Play in the sun</h5>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="img-wrapper">
                      <img src={require('../../assets/images/slide-2.png').default}  alt="Slide" />
                    </div>
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked="" />
                        <label className="form-check-label font-24" for="check1"></label>
                      </div>
                      <h5 className="card-title">Go Shopping</h5>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="img-wrapper">
                      <img src={require('../../assets/images/slide-3.png').default} alt="Slide" />
                    </div>
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked="" />
                        <label className="form-check-label font-24" for="check1"></label>
                      </div>
                      <h5 className="card-title">Take cooking classes</h5>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="img-wrapper">
                      <img src={require('../../assets/images/slide-4.png').default} alt="Slide" />
                    </div>
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked="" />
                        <label className="form-check-label font-24" for="check1"></label>
                      </div>
                      <h5 className="card-title">Visit Theme Parks</h5>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="img-wrapper">
                      <img src={require('../../assets/images/slide-1.png').default} alt="Slide" />
                    </div>
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked="" />
                        <label className="form-check-label font-24" for="check1"></label>
                      </div>
                      <h5 className="card-title">Play in the sun</h5>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card">
                    <div className="img-wrapper">
                      <img src={require('../../assets/images/slide-1.png').default} alt="Slide" />
                    </div>
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked="" />
                        <label className="form-check-label font-24" for="check1"></label>
                      </div>
                      <h5 className="card-title">Play in the sun</h5>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <a name="" id="" className="btn btn-primary me-5" href="./interests_kid_activities_5.html" role="button">Next</a>
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

export default QuestionKid;
