import { bool } from "prop-types";
import clsx from "clsx";
import { NavigationItem, NavigationList, NavigationGroup } from "components/Navigation";
import withViewportDetection from "containers/Hocs/WithViewportDetection";
import withToggle from "containers/Hocs/WithToggle";

const PublicNavigationContainer = ({ isMobile }) => {
	const navClassName = clsx("Navigation", {
		mobile: isMobile
	});
	const listClassName = clsx("Navigation_list", {
		mobile: isMobile
	});

	return (
		<NavigationGroup classpropname={navClassName}>
			<NavigationList classpropname={`${listClassName} stripped`}>
				<NavigationItem href="/our-magazine">Our Magazine</NavigationItem>
				<NavigationItem href="/handtohand/handtohand" as="/handtohand/1">
					Hand To Hand
				</NavigationItem>
				<NavigationItem href="/wholesale/wholesale" as="/wholesale/1">
					WholeSale
				</NavigationItem>
				<NavigationItem href="/activity">Activity</NavigationItem>
			</NavigationList>
			{!isMobile ? (
				<NavigationList classpropname={`${listClassName} authorization_buttons`}>
					<NavigationItem href="/sign-in" classpropname="sign_btn">
						Login
					</NavigationItem>
					<NavigationItem href="/sign-up" classpropname="sign_btn">
						Sign Up
					</NavigationItem>
				</NavigationList>
			) : null}
		</NavigationGroup>
	);
};

PublicNavigationContainer.propTypes = {
	isMobile: bool.isRequired
};

export default withToggle(withViewportDetection(PublicNavigationContainer));
