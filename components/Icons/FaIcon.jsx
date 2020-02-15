import * as PropTypes from "prop-types";
import classNames from "class-names";

const FaIcon = ({ icon, className, ...rest }) => (
	<i className={classNames("fab", icon, className)} {...rest} />
);

FaIcon.propTypes = {
	icon: PropTypes.string.isRequired
};

export default FaIcon;
