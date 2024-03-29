import React from "react";
import ReactDOM from "react-dom";
import classes from"./modal.module.css";

const Backdrop = ({onClose, children}) => {
  return <div className={classes.backdrop} onClick={onClose}/>
}

const ModalOverlay = ({children, logout}) => {
  return (
    <div className={`${classes.modal} ${logout == 'no' ? `alert alert-warning` : `alert alert-danger`}`}>
      <img src={require('../../assets/images/6.gif')} className="img-fluid" alt="" />
      <div className={classes.content}>
        {children}
      </div>
    </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = ({onClose, children, logout="no"}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay logout={logout}>{children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  )
}

export default Modal;