/*eslint-disable max-lines */
import { useState, useEffect } from "react";
import * as PropTypes from "prop-types";
import clsx from "clsx";
import ScrollArea from "react-custom-scrollbars";

import { SvgIcon } from "components/Icons";

import "./Select.scss";

const SelectOption = ({ onChange, ...rest }) => {
	//const [isOpen, setIsOpen] = useState(true);

	const handleSelect = () => onChange({ ...rest });

	return (
		<div
			role="button"
			className="SelectOption"
			tabIndex={0}
			onClick={handleSelect}
			onKeyDown={handleSelect}
		>
			{rest.mainSection}
			{/*{rest.subsection && isOpen
				? rest.subsection.map(option => (
					<ScrollArea key={option.id} universal autoHeight autoHeightMin={0} autoHeightMax={200}>
						<div
							role="button"
							className="SelectOption"
							tabIndex={0}
							onClick={handleSelect}
							onKeyDown={handleSelect}
						>
							{option.mainSection}
						</div>
					</ScrollArea>
				  ))
				: null} */}
		</div>
	);
};

const SelectCategories = ({
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
		const { mainSection } = option;
		const e = {
			target: {
				value: mainSection,
				type: "select"
			}
		};
		onChange(e);
	};

	const handleClose = () => {
		document.removeEventListener("click", handleClose);
		setIsOpen(false);
	};

	const handleOpen = () => {
		document.addEventListener("click", handleClose);
		setIsOpen(true);
	};

	useEffect(() => () => document.removeEventListener("click", handleClose), []);

	const handleToggle = () => (isOpen ? handleClose() : handleOpen());

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
				onClick={handleToggle}
				//onKeyDown={handleToggle}
			>
				{value}
				<SvgIcon icon="arrow-down" />
			</div>
			<div className="options">
				<ScrollArea
					className="scrollArea"
					universal
					autoHeight
					autoHeightMin={0}
					autoHeightMax={200}
				>
					{options.map(option => (
						<SelectOption key={option.id} {...option} onChange={handleChange} />
					))}
				</ScrollArea>
			</div>
		</div>
	);
};

SelectCategories.defaultProps = {
	size: "md"
};

SelectCategories.propTypes = {
	className: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])
	),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})]),
	name: PropTypes.string,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	onChange: PropTypes.func.isRequired,
	invalid: PropTypes.bool,
	disabled: PropTypes.bool
};

export default SelectCategories;
