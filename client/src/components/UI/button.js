import React from 'react';

const Button = ({buttonClickHandler, title}) => {
	return (
			<button className="btn btn-primary" onClick={buttonClickHandler}>{title}</button>
	)
}

export default Button;