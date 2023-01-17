import React from 'react';
import Modal from "../UI/modal";
import { NavLink, useNavigate } from "react-router-dom";
import Input from '../UI/input';
import Button from '../UI/button';
import Back from '../UI/back';

function SignUpSection({nextClickHandler, authState, authLoading, emailRef, firstnameRef, lastnameRef, addressRef,
  cityRef, stateRef, countryRef, passwordRef, zipRef, privacyRef, submitHandler
}) {

  const crossHandler = (event, ref) => {
    if (event.target.className === 'cross-icon') {
      ref.current.value=""
    }
  }

  const privacyRefCheckHandler = (e) => {
   
  }

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
                  <div className="cross-field mb-3 email-grid" onClick={(e) => crossHandler(e, emailRef)}>
                    <Input ref={emailRef} input={{"type":"email", "placeholder":"Email Address",
                      "className":"form-control"}}/>
                    <div className="cross-icon"></div>
                  </div>
                  <div className="cross-field mb-3 email-grid" onClick={(e) => crossHandler(e, passwordRef)}>
                    <Input ref={passwordRef} input={{"type":"password", "placeholder":"Strong Password", "className":"form-control"}}/>
                    <div className="cross-icon"></div>
                  </div>
                  <div className="mb-3 name-grid">
                    <div className="cross-field" onClick={(e) => crossHandler(e, firstnameRef)}>
                      <Input ref={firstnameRef} input={{"type":"text", "placeholder":"First Name",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                    <div className="cross-field" onClick={(e) => crossHandler(e, lastnameRef)}>
                      <Input ref={lastnameRef} input={{"type":"text", "placeholder":"Last Name",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                  </div>
                  <div className="cross-field mb-3 address-grid" onClick={(e) => crossHandler(e, addressRef)}>
                    <Input ref={addressRef} input={{"type":"text", "placeholder":"Street Address",
                      "className":"form-control"}}/>
                    <div className="cross-icon"></div>
                  </div>
                  <div className="mb-3 location-grid">
                    <div className="cross-field" onClick={(e) => crossHandler(e, cityRef)}>
                      <Input ref={cityRef} input={{"type":"text", "placeholder":"City",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                    <div className="cross-field" onClick={(e) => crossHandler(e, stateRef)}>
                      <Input ref={stateRef} input={{"type":"text", "placeholder":"State/Province",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                    <div className="cross-field" onClick={(e) => crossHandler(e, countryRef)}>
                      <Input ref={countryRef} input={{"type":"text", "placeholder":"Country",
                        "className":"form-control"}}/>
                      <div className="cross-icon"></div>
                    </div>
                  </div>
                  <div className="info-grid">
                    <div className="cross-field" onClick={(e) => crossHandler(e, zipRef)}>
                      <Input ref={zipRef} input={{"type":"text", "placeholder":"Zip/ Postal Code",
                        "className":"form-control"}}/> 
                      <div className="cross-icon"></div>
                    </div>
                  </div>
                  <div className="mb-3 mt-3">
                      <input className="form-check-input" ref={privacyRef}  type="checkbox" onChange={e => privacyRefCheckHandler(e)}/>
              
                    In creating my account I agree to the <NavLink >Privacy Policy</NavLink> of this site
                  </div>
              </div>
              <div className="mt-4">
                <button type="submit" name="" id="" disabled={authLoading ? true : false} className="btn btn-primary">{authLoading ? `Submitting...` : `Create Account`}</button>
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