import { string } from "prop-types";

const NavigationList = ({ children, classpropname }) => <ul className={classpropname}>{children}</ul>;

NavigationList.propTypes = {
	"classpropname": string
};

export default NavigationList;
