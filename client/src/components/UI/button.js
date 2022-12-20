import React from 'react';

const Button = ({buttonClickHandler, title, classes}) => {
	return (
			<button className={classes} onClick={buttonClickHandler}>{title}</button>
	)
}

export default Button;