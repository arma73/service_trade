import { string } from "prop-types";
import class_names from "class-names";

import "./Footer.scss";

const Footer = ({ children, classpropname }) => (
	<footer className={class_names("Footer", classpropname)}>{children}</footer>
);

Footer.propTypes = {
	classpropname: string
};

Footer.defaultProps = {
	classpropname: ""
};

export default Footer;
