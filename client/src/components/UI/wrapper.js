import React, { useContext } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import AuthContext from "../../store/authContext";
import HomeContext from "../../store/homeContext";
import HomeBtn from "./homeBtn";
import useData from "../../hooks/useData";
import Modal from "./modal";

function Wrapper({customClassName, children, pageName='initial'})	{
  const {fetchDataHandler: sendDataLogout, loading: logoutLoading} = useData();
  const ctxAuth = useContext(AuthContext);
  const ctxHome = useContext(HomeContext);
  const navigate = useNavigate();

  const getAuthData = async(data) => {
    // if(data.status == "200"){
      await ctxHome.clearContext()
      await ctxAuth.logout()
      navigate("/")
    // }
  }

  const logoutHandler = async() => {
    sendDataLogout(`${process.env.REACT_APP_SERVER_URL}families/sign_out`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    },
    getAuthData);
   
  }

	return (
		<div className="main-wrapper">
      <div className={`welcome-screens ${customClassName}`}>
      {logoutLoading && <Modal logout="yes">Logging out ...</Modal>}
				{children}
				<div className="footer-links mt-5 px-3">
          <div className="d-flex align-items-center">
            {pageName !== 'intro' && <HomeBtn title="Home" buttonClickHandler={(e) => {e.preventDefault();navigate("/")}}/> }
            <NavLink to="/" className="d-flex align-items-center me-4">
              <div className="d-flex">
                <img src={require('../../assets/images/info-icon.svg').default} className="img-fluid me-1" alt="" />
              </div>
              Instructions
            </NavLink>
            {pageName === 'intro' && 
            <NavLink to="/" className="d-flex align-items-center me-4">
              <div className="d-flex">
                <img src={require('../../assets/images/about-icon.svg').default} className="img-fluid me-1" alt="" />
              </div>
              About
            </NavLink>
            }
            <NavLink to="/" className="d-flex align-items-center me-4">
              <div class="d-flex">
                <img src={require("../../assets/images/privacy.png")} class="img-fluid me-1" alt="" />
              </div>
              Privacy
            </NavLink>
            {(ctxAuth.email !== '' && pageName !== 'survey') &&
              <NavLink onClick={logoutHandler} className="d-flex align-items-center ms-3">
                Logout
              </NavLink>
            }
          </div>
          {(ctxAuth.email !== '' && pageName !== 'survey') &&
            <NavLink to="/settings" className="d-flex align-items-center ms-3">
                Settings
            </NavLink>
          }
        </div>
			</div>
		</div>
	)
}

export default Wrapper;