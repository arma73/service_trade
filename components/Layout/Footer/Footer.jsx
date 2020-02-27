import { string } from "prop-types";
import clsx from "clsx";

import "./Footer.scss";

const Footer = ({ children, classpropname }) => (
	<footer className={clsx("Footer", classpropname)}>{children}</footer>
);

Footer.propTypes = {
	classpropname: string
};

Footer.defaultProps = {
	classpropname: ""
};

export default Footer;
