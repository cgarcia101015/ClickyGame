import React, { Component } from 'react';
import Nav from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import rickMorty from './components/rickMorty.json';
import Footer from './components/Footer';

class App extends Component {
	// Setting this.state.rickMorty

	state = {
		rickMorty,
		clickedImage: [],
		wins: 0,
		loss: 0
	};

	shuffleRick = () => {
		const rickMorty = this.state.rickMorty;

		for (let i = 0; i < rickMorty.length; i++) {
			const randomIndex = Math.floor(Math.random() * rickMorty.length);
			console.log(randomIndex);
			const tempImg = rickMorty[i];
			rickMorty[i] = rickMorty[randomIndex];
			rickMorty[randomIndex] = tempImg;
		}
		return rickMorty;
	};

	handleClick = (id) => {
		const clickedImage = this.state.clickedImage;
		let wins = this.state.wins;
		let loss = this.state.loss;
		if (clickedImage.includes(id)) {
			console.log('You Lost!');
			loss++;
			const randomArray = this.shuffleRick();
			this.setState({ clickedImage, rickMorty: randomArray, loss });
		} else {
			wins++;
			clickedImage.push(id);
			const randomArray = this.shuffleRick();
			this.setState({ clickedImage, rickMorty: randomArray, wins });
		}
	};

	render() {
		return (
			<div>
				<Nav />
				<Header wins={this.state.wins} loss={this.state.loss} />
				{this.state.rickMorty.map((rickMorty) => (
					<Main id={rickMorty.id} key={rickMorty.id} image={rickMorty.image} handleClick={this.handleClick} />
				))}
				<Footer />
			</div>
		);
	}
}

export default App;
