import { useState } from "react";
import { string, oneOf } from "prop-types";
import clsx from "clsx";
import { BlockContainer } from "components/Block";

import "./HoverShow.scss";

const HoverShow = ({ children, Component, className, hoverSide, subData }) => {
	const [isShow, setIsShow] = useState(false);

	const handleClose = () => {
		setIsShow(false);
	};

	const handleOpen = () => {
		setIsShow(true);
	};

	const compositeClassName = clsx("HoverShow", {
		[className]: className,
		opened: isShow
	});

	return (
		<div onMouseEnter={handleOpen} onMouseLeave={handleClose} className={compositeClassName}>
			{children}
			<BlockContainer className={clsx("HoverShow_Element", hoverSide)}>
				<Component className={clsx("HoverShow_Element_Component", hoverSide)} subData={subData} />
			</BlockContainer>
		</div>
	);
};

HoverShow.propTypes = {
	className: string,
	hoverSide: oneOf(["_r", "_l", "_t", "_d"])
};

HoverShow.defaultProps = {
	hoverSide: "_d"
};

export default HoverShow;
