
import React from 'react';
import '../app/App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

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
