import React from 'react';

const Input = React.forwardRef((props, ref) => {
	return (
		<div className="form-group">
			<input ref={ref} {...props.input}/>
		</div>
	)
})

export default Input;