import React from "react";
import { Count } from "./count.js";
import PropTypes from "prop-types";

export function Home(props) {
	return (
		<div className="time">
			<Count seconds={props.time} />
		</div>
	);
}
Home.propTypes = {
	time: PropTypes.number
};
