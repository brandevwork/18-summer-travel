import React from 'react';

const Input = React.forwardRef(({input}, ref) => {
	return (
		<div className="form-group">
			<input ref={ref} {...input}/>
			<div className="cross-icon"></div>
		</div>
	)
})

export default Input;