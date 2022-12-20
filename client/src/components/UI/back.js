import React from 'react';
import { NavLink } from "react-router-dom";

const Back = ({buttonClickHandler, title, classes}) => {
	return (
		<NavLink onClick={buttonClickHandler} className="d-flex align-items-center p-4">
      <div className="d-flex">
        <img src={require('../../assets/images/back-arrow.svg').default} className="img-fluid me-1" alt="" />
      </div>
      <div className="back-text">{title}</div>
    </NavLink>
	)
}

export default Back;