import { string } from "prop-types";

const NavigationList = ({ children, className }) => <ul className={className}>{children}</ul>;

NavigationList.propTypes = {
	className: string
};

export default NavigationList;
