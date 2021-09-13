import React from 'react';
import RadioBtn from '../componets/RadioBtn/RadioBtn';
import ResetBtn from '../componets/ResetBtn/ResetBtn';
import './Main.css';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			count: 0,
			X: 0,
			O: 0,
			slectedXorO: '',
		};
		this.winnerLine = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
	}
	clickHandler = (event) => {
		let data = event.target.getAttribute('data');
		let currentSquares = this.state.squares;
		if (currentSquares[data] === null && this.state.slectedXorO === 'X') {
			currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
			this.setState({ count: this.state.count + 1 })
			this.setState({ squares: currentSquares });
		} else if (currentSquares[data] === null && this.state.slectedXorO === 'O') {
			currentSquares[data] = (this.state.count % 2 === 0) ? 'O' : 'X';
			this.setState({ count: this.state.count + 1 })
			this.setState({ squares: currentSquares });
		} else if (currentSquares[data] === null && this.state.slectedXorO === '') {
			alert('Selected yor first step X or O')
		} else {
			alert('NO NO Bro')
		}
		this.isWinner();
	}

	isWinner = () => {
		let s = '';
		if (this.state.slectedXorO === 'X') { s = (this.state.count % 2 === 0) ? 'X' : 'O'; }
		if (this.state.slectedXorO === 'O') { s = (this.state.count % 2 === 0) ? 'O' : 'X'; }
		for (let i = 0; i < 8; i++) {
			let line = this.winnerLine[i];
			if (this.state.squares[line[0]] === s
				&& this.state.squares[line[1]] === s
				&& this.state.squares[line[2]] === s) {
				setTimeout(() => {
					if (s === 'X') this.setState({ X: this.state.X + 1 })
					if (s === 'O') this.setState({ O: this.state.O + 1 })
					alert(s + ' is Winner');
					this.setState({ squares: Array(9).fill(null) });
					this.setState({ count: 0 });
				}, 100)
				if (this.state.count === 8) {
					return;
				}
			}
		}
		if (this.state.count === 8) {
			this.isNoWinner()
		}
	}
	isNoWinner = () => {
		if (!this.state.squares.includes(null)) {
			setTimeout(() => {
				alert('No Winner')
				this.setState({ squares: Array(9).fill(null) });
				this.setState({ count: 0 });
			}, 100)
		}
	}

	resetGame = () => {
		this.setState({ squares: Array(9).fill(null) });
		this.setState({ count: 0 });
		this.setState({ X: 0 });
		this.setState({ O: 0 });
		this.setState({ slectedXorO: '' });
	}
	selectXO = (event) => {
		this.setState({ slectedXorO: event.target.getAttribute('id') });
	}

	render() {
		return (
			<main>
				<section className="conteiner">
					<div className="score">
						<div>
							X:<span>{this.state.X}</span>
						</div>
						<div><ResetBtn onClick={this.resetGame} /></div>
						<div>
							O:<span>{this.state.O}</span>
						</div>
					</div>
					<div className="game-field">
						{this.state.squares.map((el, index) => {
							return (
								<div className="t-grid" onClick={this.clickHandler} data={index} key={index}>{el}</div>
							)
						})}
					</div>
					<div className="wrapper">
						<RadioBtn
							id={'X'}
							value={"X"}
							checked={this.state.slectedXorO === 'X'}
							onChange={this.selectXO}
						/>
						<RadioBtn
							id={'O'}
							value={"O"}
							checked={this.state.slectedXorO === 'O'}
							onChange={this.selectXO}
						/>
					</div>

				</section>
			</main>
		)
	}
}
export default Main;
