import { useRef, useEffect } from "react";
import * as PropTypes from "prop-types";
import clsx from "clsx";
import { SvgIcon } from "components/Icons";

import "./Input.scss";

const Input = ({
	children,
	className,
	type,
	size,
	value,
	invalid,
	disabled,
	labelRight,
	labelLeft,
	iconRight,
	iconLeft,
	onChange,
	onFocus,
	...restProps
}) => {
	const inputRef = useRef(null);
	const handleChange = e => onChange(e, e.target.value);
	const handleBlur = () => onFocus(false);
	const handleFocus = () => onFocus(true);

	useEffect(() => {
		inputRef.current.onfocus = () => handleFocus();
	}, []);

	const wrapperClassName = clsx("Input", size, {
		[className]: className,
		invalid,
		disabled,
		"label-left": labelLeft,
		"label-right": labelRight,
		"icon-right": iconRight,
		"icon-left": iconLeft
	});

	return (
		<div className={wrapperClassName}>
			<input
				value={value}
				type={type}
				ref={inputRef}
				onBlur={handleBlur}
				onChange={handleChange}
				{...restProps}
			/>
			{labelRight && <div className="label-right">{labelRight}</div>}
			{iconRight && <SvgIcon icon={iconRight} />}
		</div>
	);
};

Input.propTypes = {
	autoComplete: PropTypes.string,
	disabled: PropTypes.bool,
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string,
	invalid: PropTypes.bool,
	labelLeft: PropTypes.string,
	labelRight: PropTypes.string,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	size: PropTypes.oneOf(["lg_m", "lg", "md", "sm"]),
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Input.defaultProps = {
	type: "text",
	size: "md",
	autoComplete: "off"
};

export default Input;
