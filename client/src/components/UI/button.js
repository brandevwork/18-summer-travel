import React from 'react';

const Button = ({buttonClickHandler, title, classes, disabled=false}) => {
	return (
			<button disabled={disabled} className={classes} onClick={buttonClickHandler}>{title}</button>
	)
}

export default Button;