
import React from 'react';
import './App.css';
import Header from './componets/header/Header';
import Main from './componets/main/Main';
import Footer from './componets/footer/Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}
export default App;
