import { string } from "prop-types";
import classNames from "class-names";

import "./Header.scss";

const Header = ({ children, className }) => (
	<header className={classNames("Header", className)}>{children}</header>
);

Header.propTypes = {
	className: string
};

Header.defaultProps = {
	className: ""
};

export default Header;
