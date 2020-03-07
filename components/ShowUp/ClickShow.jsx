import { useState, useEffect } from "react";
import { string } from "prop-types";
import clsx from "clsx";
import { BlockContainer } from "components/Block";

import "./ClickShow.scss";

const ClickShow = ({
	children,
	Component,
	className,
	childClassName,
	onChange,
	options
}) => {
	const [isShow, setIsShow] = useState(false);

	const handleClose = () => {
		document.removeEventListener("click", handleClose);
		setIsShow(false);
	};

	const handleOpen = () => {
		document.addEventListener("click", handleClose);
		setIsShow(true);
	};

	const handleToggle = () => (isShow ? handleClose() : handleOpen());

	useEffect(() => () => document.removeEventListener("click", handleClose), []);
	const compositeClassName = clsx("ClickShow", {
		[className]: className,
		opened: isShow
	});

	return (
		<div className={compositeClassName} onClick={handleToggle}>
			{children}
			<BlockContainer className={clsx("ClickShow_Element", childClassName, { _sl: isShow && childClassName })}>
				<Component
					className="ClickShow_Element_Component"
					handleChange={onChange}
					options={options}
				/>
			</BlockContainer>
		</div>
	);
};

ClickShow.propTypes = {
	className: string
};

export default ClickShow;
