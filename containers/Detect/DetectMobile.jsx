import { bool } from "prop-types";
import clsx from "clsx";
import { NavigationGroup } from "components/Navigation";
import withViewportDetection from "containers/Hocs/WithViewportDetection";
import withToggle from "containers/Hocs/WithToggle";

const DetectMobile = ({ isMobile, Component }) => {
	const navClassName = clsx("Navigation", {
		mobile: isMobile
	});

	return (
		<NavigationGroup classpropname={navClassName}>
			<Component isMobile={isMobile} />
		</NavigationGroup>
	);
};

DetectMobile.propTypes = {
	isMobile: bool.isRequired
};

export default withToggle(withViewportDetection(DetectMobile));
