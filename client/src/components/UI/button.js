import React from 'react';

const Button = ({buttonClickHandler, title}) => {
	return (
		<div className="form-group">
			<button onClick={buttonClickHandler}>{title}</button>
		</div>
	)
}

export default Button;