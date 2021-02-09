import React from "react";
import PropTypes from "prop-types";

export function Count(props) {
	let counter1 = Math.floor(props.seconds / 100000) + "";
	let counter2 = Math.floor(props.seconds / 10000) + "";
	let counter3 = Math.floor(props.seconds / 1000) + "";
	let counter4 = Math.floor(props.seconds / 100) + "";
	let counter5 = Math.floor(props.seconds / 10) + "";
	let counter6 = Math.floor(props.seconds / 1) + "";

	return (
		<div className="bigcounter">
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div className="nub">{counter1.charAt(counter1.length - 1)}</div>
			<div className="nub">{counter2.charAt(counter2.length - 1)}</div>
			<div className="nub">{counter3.charAt(counter3.length - 1)}</div>
			<div className="nub">{counter4.charAt(counter4.length - 1)}</div>
			<div className="nub">{counter5.charAt(counter5.length - 1)}</div>
			<div className="nub">{counter6.charAt(counter6.length - 1)}</div>
		</div>
	);
}
Count.propTypes = {
	seconds: PropTypes.number
};
