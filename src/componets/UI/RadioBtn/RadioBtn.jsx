import React from 'react';
import './RadioBtn.css'

const RadioBtn = (props) => {
	return (
		<label className="b-lable">
			<input
				type="radio"
				id={props.id}
				checked={props.checked}
				onChange={props.onChange} />
			<span className="radio-pulse" />
			<span className="radio-button">
				<span className="radio-button-inner" />
			</span>
			<span className="radio-lable">{props.value}</span>
		</label>
	);
};

export default RadioBtn;