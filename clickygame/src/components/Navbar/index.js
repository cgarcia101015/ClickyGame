import React from 'react';
import './style.css';

function Nav() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<a className="brand" href="/">
						ClickyGame App
					</a>
				</li>
				<li className="middle">Click on an image to begin!</li>
				{/* <li className="score-card" /> */}
			</ul>
		</nav>
	);
}

export default Nav;
