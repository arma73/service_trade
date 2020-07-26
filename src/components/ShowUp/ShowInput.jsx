import { useState, useEffect } from "react";
import { string, bool } from "prop-types";
import clsx from "clsx";
import { BlockContainer } from "components/Block";

import "./ShowInput.scss";

const ShowInput = ({ children, Component, className, value, focus }) => {
	const [isShow, setIsShow] = useState(false);

	const handleClose = () => {
		setIsShow(false);
	};

	const handleOpen = () => {
		setIsShow(true);
	};
	// const handleToggle = () => (isShow ? handleClose() : handleOpen());

	useEffect(() => {
		if (value.length > 1 && focus) {
			handleOpen();
		} else handleClose();
		return () => handleClose();
	}, [value, focus]);

	// const memoizedValue = useMemo(() => value.length > 1, [value]);

	const compositeClassName = clsx("ShowInput", {
		[className]: className,
		"opened": isShow
	});

	return (
		<div className={compositeClassName}>
			{children}
			<BlockContainer className="ShowInput_Element">
				<Component className="ShowInput_Element_Component" />
			</BlockContainer>
		</div>
	);
};

ShowInput.propTypes = {
	"className": string,
	"value": string,
	"focus": bool
};

export default ShowInput;
