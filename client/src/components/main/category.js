import React from 'react';
import Back from '../UI/back';
import Button from "../UI/button";
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";

function Category({homeLoadingSurveySaved, questionIndex, heading ,question_image, question_text, question_id, choices, submitHandler})  {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <React.Fragment>
    <div className="back-page">
      <Back title="back"  buttonClickHandler={(e) => {e.preventDefault();submitHandler(id, parseInt(question_id), {}, parseInt(questionIndex)-1, "Back")}}/>
    </div>

    <div className="center-content mx-auto welcome-intro">
      <div className="content-grid">
        <div className="d-flex justify-content-center flex-column">
          <h2>
            Yay! For the last set of questions. I,m going to ask what cities around the world you want to visit.
          </h2>
          <div className="mt-4">
            <Button classes="btn btn-primary me-5" disabled={homeLoadingSurveySaved ? true : false} title={homeLoadingSurveySaved ? `Submitting...` : `Next`} buttonClickHandler={() => submitHandler(id, question_id, [],  parseInt(questionIndex), "Category")}/>
          </div>
        </div>
        <div>
          <img src={require('../../assets/images/around-world.png')} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Category;