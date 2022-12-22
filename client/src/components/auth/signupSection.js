import React from 'react';
import Modal from "../UI/modal";
import { NavLink, useNavigate } from "react-router-dom";
import Input from '../UI/input';
import Button from '../UI/button';
import Back from '../UI/back';

function SignUpSection({nextClickHandler, authState, authLoading, emailRef, firstnameRef, lastnameRef, addressRef,
  cityRef, stateRef, countryRef, passwordRef, zipRef, submitHandler
}) {

  return (
    <React.Fragment>
      <div className="back-page p-4">
        <Back title="Back" buttonClickHandler={() => nextClickHandler('saveBeforeSignup')}/>
      </div>
      {authState.error && 
        <ul className="text-danger list-group">
          {authState.errorMessage.map((eachMessage, index) => (
            <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
            ))}
        </ul>
      }
      {authLoading && <Modal>Please Wait ...</Modal>}
      <div className="center-content mx-auto">
        <div className="content-grid content-grid-registration">
          <div className="d-flex justify-content-center flex-column">
            <h2>
              Let's create an account for you with an email address, zipcode and password.
            </h2>
            <p>
              This will allow you to save your progress and return at a later time to edit and see your results again. Your address will help us match you with local resources!
            </p>
            <form onSubmit={submitHandler}>
              <div className="mb-2 registraion-form">
                  <div className="cross-field mb-3 email-grid">
                    <Input ref={emailRef} input={{"type":"email", "placeholder":"Email Address",
                      "className":"form-control"}}/>
                    <div className="cross-icon"></div>
                  </div>
                  <div className="mb-3 name-grid">
                    <div className="cross-field">
                      <Input ref={firstnameRef} input={{"type":"text", "placeholder":"First Name",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                    <div className="cross-field">
                      <Input ref={lastnameRef} input={{"type":"text", "placeholder":"Last Name",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                  </div>
                  <div className="cross-field mb-3 address-grid">
                    <Input ref={addressRef} input={{"type":"text", "placeholder":"Street Address",
                      "className":"form-control"}}/>
                    <div className="cross-icon"></div>
                  </div>
                  <div className="mb-3 location-grid">
                    <div className="cross-field">
                      <Input ref={cityRef} input={{"type":"text", "placeholder":"City",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                    <div className="cross-field">
                      <Input ref={stateRef} input={{"type":"text", "placeholder":"State/Province",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                    <div className="cross-field">
                      <Input ref={countryRef} input={{"type":"text", "placeholder":"Country",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                  </div>
                  <div className="info-grid">
                    <div className="cross-field">
                      <Input ref={passwordRef} input={{"type":"password", "placeholder":"Strong Password", "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                    <div className="cross-field">
                      <Input ref={zipRef} input={{"type":"text", "placeholder":"Zip/ Postal Code",
                        "className":"form-control"}}/> 
                      <div className="cross-icon"></div>
                    </div>
                  </div>
              </div>
              <div className="mt-4">
                <button type="submit" name="" id="" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
          <div className="d-flex">
            <img src={require('../../assets/images/registration.svg').default} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignUpSection;