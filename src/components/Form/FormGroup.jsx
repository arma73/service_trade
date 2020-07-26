import { string, bool } from "prop-types";
import clsx from "clsx";

import "./FormGroup.scss";

const FormGroup = ({ children, className, inline, ...restProps }) => (
	<div className={clsx("FormGroup", { [className]: className, inline })} {...restProps}>
		{children}
	</div>
);

FormGroup.propTypes = {
	"className": string,
	"inline": bool
};

export default FormGroup;
