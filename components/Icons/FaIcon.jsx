import { string } from "prop-types";
import class_names from "class-names";

const FaIcon = ({ icon, classpropname, ...rest }) => (
	<i className={class_names("fab", icon, classpropname)} {...rest} />
);

FaIcon.propTypes = {
	classpropname: string,
	icon: string.isRequired
};

export default FaIcon;
