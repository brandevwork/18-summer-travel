import React from 'react';
import Modal from "../UI/Modal";
import { NavLink, useNavigate } from "react-router-dom";
import Input from '../UI/Input';
import Button from '../UI/Button';

function SignUpSection(props)  {

  return (
    <section id="content" className="bg-info dker wrapper-md animated fadeInDown" style={{"height":"150vh"}}>
      <Button title="Back" buttonClickHandler={() => props.nextClickHandler('save_before_signup')}/>
      {props.authState.error && 
        <ul className="text-danger list-group">
          {props.authState.errorMessage.map((eachMessage, index) => (
            <li className="list-group-item list-group-item-danger" key={index}>{eachMessage}</li>
            ))}
        </ul>
      }
      {props.authLoading && <Modal>Please Wait ...</Modal>}
      <div className="container aside-xl">
        <section className="m-b-lg">
          <form onSubmit={props.submitHandler}>
          <Input ref={props.emailRef} input={{"type":"email", "placeholder":"Email",
            "className":"form-control rounded input-lg text-center no-border"}}/>
          <Input ref={props.firstnameRef} input={{"type":"text", "placeholder":"First Name",
            "className":"form-control rounded input-lg text-center no-border"}}/>
          <Input ref={props.lastnameRef} input={{"type":"text", "placeholder":"Last Name",
            "className":"form-control rounded input-lg text-center no-border"}}/>
          <Input ref={props.streetRef} input={{"type":"text", "placeholder":"Street",
            "className":"form-control rounded input-lg text-center no-border"}}/>
          <Input ref={props.cityRef} input={{"type":"text", "placeholder":"City",
            "className":"form-control rounded input-lg text-center no-border"}}/>
          <Input ref={props.stateRef} input={{"type":"text", "placeholder":"State",
            "className":"form-control rounded input-lg text-center no-border"}}/>
          <Input ref={props.countryRef} input={{"type":"text", "placeholder":"Country",
            "className":"form-control rounded input-lg text-center no-border"}}/>
          <Input ref={props.passwordRef} input={{"type":"password", "placeholder":"Password", "className":"form-control rounded input-lg text-center no-border"}}/>
          <Input ref={props.zipRef} input={{"type":"text", "placeholder":"Zip",
            "className":"form-control rounded input-lg text-center no-border"}}/>          
            <button type="submit" className="btn btn-lg btn-warning lt b-white b-2x
              btn-block btn-rounded">
              <i className="icon-arrow-right pull-right"></i>
              <span className="m-r-n-lg">Sign up</span>
            </button>
            <div className="line line-dashed"></div>
            <p className="text-muted text-center">
              <small>Already have an account?</small>
            </p>
            <NavLink className="btn btn-lg btn-info btn-block rounded" to="/signin" >
              Sign in
            </NavLink>
          </form>
        </section>
      </div>
    </section>
  )
}

export default SignUpSection;