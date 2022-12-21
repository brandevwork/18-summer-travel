import React from 'react';
import { NavLink } from "react-router-dom";

const HomeBtn = ({buttonClickHandler, title, classes}) => {
	return (
		<NavLink onClick={buttonClickHandler} className="d-flex align-items-center me-4">
      <div className="d-flex">
        <img src={require('../../assets/images/home-icon.svg').default} className="img-fluid me-1" alt="" />
      </div>
      {title}
    </NavLink>
  )
}

export default HomeBtn;