import clsx from "clsx";

import "./BlockContainer.scss";

const BlockContainer = ({ children, className }) => (
	<section className={clsx("BlockContainer", className)}>{children}</section>
);

export default BlockContainer;
