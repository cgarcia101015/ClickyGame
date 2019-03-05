import React from 'react';
import './style.css';

function Header(props) {
	return (
		<div className="header">
			<h1>ClickyGame App</h1>
			<h2>Click on an image to earn points, but don't click on any more than once!</h2>
			<h4>Wins:{props.wins}</h4>
			<h4>Loss:{props.loss}</h4>
		</div>
	);
}

export default Header;
