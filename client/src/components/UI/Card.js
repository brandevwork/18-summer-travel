import React, { Fragment } from 'react';
import Header from '../layout/header';
import SideBar from '../layout/sidebar';
import Footer from '../layout/footer';
import classes from './Card.module.css';
import Modal from './Modal';

function Card(props)	{
	return (
		<div >
			<Header  />
			<SideBar/>
			<div className={`${classes.card} ${props.className}`}>
				{props.children}
			</div>
			<Footer/>
		</div>
	)
}

export default Card;