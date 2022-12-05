import React from 'react';

const Button = (props) => {
	return (
		<div className="form-group">
			<button onClick={props.buttonClickHandler}>{props.title}</button>
		</div>
	)
}

export default Button;