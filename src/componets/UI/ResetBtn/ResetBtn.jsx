import React from 'react';
import cl from './ResetBtn.module.css'

const ResetBtn = (props) => {
	return (
		<button onClick={props.onClick} className={cl.resetBtn}>RESET GAME</button>
	);
};

export default ResetBtn;