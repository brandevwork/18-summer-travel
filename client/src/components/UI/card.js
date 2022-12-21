import React, { Fragment } from 'react';
import classes from './card.module.css';
import Modal from './modal';

function Card({className, children})	{
	return (
		<div >
			<div className={`${classes.card} ${className}`}>
				{children}
			</div>
		</div>
	)
}

export default Card;