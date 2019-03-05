import React from 'react';
import './style.css';

function Main(props) {
	return (
		<div className="main">
			<div className="card" onClick={() => props.handleClick(props.id)}>
				<div className="img-container">
					<img alt={props.name} src={props.image} />
				</div>
			</div>
		</div>
	);
}

export default Main;
