import { string } from "prop-types";
import clsx from "clsx";

import "./Header.scss";

const Header = ({ children, classpropname }) => (
	<section className={clsx("Header", classpropname)}>{children}</section>
);

Header.propTypes = {
	classpropname: string
};

Header.defaultProps = {
	classpropname: ""
};

export default Header;
