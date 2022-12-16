import React, { Fragment } from 'react';
import Header from '../layout/header';
import SideBar from '../layout/sidebar';
import Footer from '../layout/footer';
import classes from './card.module.css';
import Modal from './modal';

function Card({className, children})	{
	return (
		<div >
			<Header  />
			<SideBar/>
			<div className={`${classes.card} ${className}`}>
				{children}
			</div>
			<Footer/>
		</div>
	)
}

export default Card;