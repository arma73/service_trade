import { string } from "prop-types";

const NavigationGroup = ({ children, classpropname }) => (
	<nav className={classpropname}>{children}</nav>
);

NavigationGroup.propTypes = {
	classpropname: string
};

export default NavigationGroup;
