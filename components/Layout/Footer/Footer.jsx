import { string } from "prop-types";
import classNames from "class-names";

import "./Footer.scss";

const Footer = ({ children, className }) => (
	<footer classNames={classNames("Footer", className)}>{children}</footer>
);

Footer.propTypes = {
	className: string
};

Footer.defaultProps = {
	className: ""
};

export default Footer;
