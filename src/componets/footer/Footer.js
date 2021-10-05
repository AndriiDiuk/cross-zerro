import React from 'react';
import './Footer.css';
import Ava from "./photo.png"

class Footer extends React.Component {
	render() {
		return (
			<footer className="conteiner">
				<div className="footer-content">
					<div className="person">
						<div className="ava">
							<img src={Ava} alt="developer" />
						</div>
						<div className="name">
							<span><b>Andrii Daneliuk</b>developer</span>
						</div>
					</div>
					<div className="social-icons">
						<a href="https://www.linkedin.com/in/andriidiuk/" target="_blank"><i className='bx bxl-linkedin footer-icon' ></i></a>
						<a href="https://www.facebook.com/andriidiuk" target={'_blank'}><i className='bx bxl-facebook-circle   footer-icon' ></i></a>
						<a href="https://github.com/andriidiuk" target="_blank"><i className='bx bxl-github  footer-icon' ></i></a>
					</div>
				</div>
			</footer >
		)
	}
}

export default Footer;
