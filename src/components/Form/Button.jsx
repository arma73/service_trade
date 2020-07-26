import React from "react";
import * as PropTypes from "prop-types";
import clsx from "clsx";

import "./Button.scss";

const Button = ({ children, type, classpropname, color, size, ...restProps }) => (
	// eslint-disable-next-line react/button-has-type
	<button
		className={clsx("Button", color, size, {
			[classpropname]: classpropname
		})}
		type={type}
		{...restProps}>
		{children}
	</button>
);

const buttonColors = ["orange", "orange-light", "outline", "transparent", "white", "grey"];

const buttonSizes = ["md", "sm", "xs"];

Button.propTypes = {
	"classpropname": PropTypes.string,
	"color": PropTypes.oneOf(buttonColors),
	"size": PropTypes.oneOf(buttonSizes),
	"type": PropTypes.oneOf(["submit", "reset", "button"])
};

Button.defaultProps = {
	"type": "button",
	"color": "orange",
	"size": "sm"
};

export { buttonColors, buttonSizes };

export default Button;
