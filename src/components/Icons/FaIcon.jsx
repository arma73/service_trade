import { string } from "prop-types";
import clsx from "clsx";

const FaIcon = ({ icon, classpropname, ...rest }) => <i className={clsx("fab", icon, classpropname)} {...rest} />;

FaIcon.propTypes = {
	"classpropname": string,
	"icon": string.isRequired
};

export default FaIcon;
