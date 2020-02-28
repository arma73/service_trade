/*eslint-disable max-lines */
import { useState, useEffect } from "react";
import * as PropTypes from "prop-types";
import clsx from "clsx";
import ScrollArea from "react-custom-scrollbars";
import SvgIcon from "../Icons/SvgIcon";

import "./Select.scss";

const SelectOption = ({ onChange, ...rest }) => {
	const handleSelect = () => onChange({ ...rest });
	return (
		<div
			role="button"
			className="SelectOption"
			tabIndex={0}
			onClick={handleSelect}
			onKeyDown={handleSelect}
		>
			{rest.label}
		</div>
	);
};

SelectOption.propTypes = {
	onChange: PropTypes.func.isRequired
};

const Select = ({
	children,
	className,
	options,
	value,
	name,
	size,
	onChange,
	invalid,
	disabled,
	...restProps
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleChange = option => {
		const { id } = option;
		const e = {
			target: {
				name,
				value: id,
				type: "select"
			}
		};
		onChange(e, option.id, option);
	};

	const handleClose = () => {
		document.removeEventListener("click", handleClose);
		setIsOpen(false);
	};

	const handleOpen = () => {
		document.addEventListener("click", handleClose);
		setIsOpen(true);
	};

	//For open and hide options
	const handleToggle = () => (isOpen ? handleClose() : handleOpen());

	useEffect(() => () => document.removeEventListener("click", handleClose), []);

	const findOption = option => option.id === value;
	const selectedOption = options.find(findOption);
	const compositeClassName = clsx("Select", size, {
		[className]: className,
		opened: isOpen,
		invalid,
		disabled
	});

	return (
		<div className={compositeClassName} {...restProps}>
			<div
				role="button"
				className="selected"
				tabIndex={0}
				onKeyDown={handleToggle}
				onClick={handleToggle}
			>
				{selectedOption.label}
				<SvgIcon icon="arrow-down" />
			</div>
			<div className="options">
				<ScrollArea universal autoHeight autoHeightMin={0} autoHeightMax={200}>
					{options.map(option => (
						<SelectOption key={option.id} {...option} onChange={handleChange} />
					))}
				</ScrollArea>
			</div>
		</div>
	);
};

Select.defaultProps = {
	size: "md"
};

Select.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	invalid: PropTypes.bool,
	name: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])
	),
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])
};

export default Select;
