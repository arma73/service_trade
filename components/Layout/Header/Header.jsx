import { string } from "prop-types";
import class_names from "class-names";

import "./Header.scss";

const Header = ({ children, classpropname }) => (
	<header className={class_names("Header", classpropname)}>{children}</header>
);

Header.propTypes = {
	classpropname: string
};

Header.defaultProps = {
	classpropname: ""
};

export default Header;
