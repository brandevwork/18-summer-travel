import React, { useContext } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import AuthContext from "../../store/authContext";
import HomeBtn from "./homeBtn";

function Wrapper({className, children})	{

  const ctxAuth = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    ctxAuth.logout()
  }

	return (
		<div className="main-wrapper">
      <div className="welcome-screens">
				{children}
				<div className="footer-links mt-5 px-3">
          <div className="d-flex align-items-center">
            <HomeBtn title="Home" buttonClickHandler={(e) => {e.preventDefault();navigate("/")}}/>
            <NavLink to="/" className="d-flex align-items-center me-4">
              <div className="d-flex">
                <img src={require('../../assets/images/info-icon.svg').default} className="img-fluid me-1" alt="" />
              </div>
              Instructions
            </NavLink>
            {ctxAuth.email !== '' &&
              <NavLink onClick={logoutHandler} className="d-flex align-items-center ms-3">
                Logout
              </NavLink>
            }
            {ctxAuth.email === '' &&
              <NavLink to="/login" className="d-flex align-items-center ms-3">
                Login
              </NavLink>
            }
          </div>
          <NavLink to="/settings" className="d-flex align-items-center ms-3">
              Settings
          </NavLink>
        </div>
			</div>
		</div>
	)
}

export default Wrapper;