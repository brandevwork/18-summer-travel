import React from "react";
import ReactDOM from "react-dom";
import classes from"./modal.module.css";

const Backdrop = ({onClose, children}) => {
  return <div className={classes.backdrop} onClick={onClose}/>
}

const ModalOverlay = ({children}) => {
  return (
    <div className={`${classes.modal} alert alert-success`}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = ({onClose, children}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  )
}

export default Modal;