import { bool, func } from "prop-types";
import clsx from "clsx";
import { NavigationItem, NavigationList, NavigationGroup } from "components/Navigation";
import SiteNavigation from "components/Layout/Header/SiteNavigation";
import { Button } from "components/Form";
import withViewportDetection from "containers/Hocs/WithViewportDetection";
import withToggle from "containers/Hocs/WithToggle";

const PublicNavigationContainer = ({ handleToggleClick, isMobile, isOpen }) => {
	const navClassName = clsx("Navigation", {
		mobile: isMobile
	});

	const listClassName = clsx("Navigation_list", {
		mobile: isMobile
	});

	return (
		<SiteNavigation handleToggleClick={handleToggleClick} isMobile={isMobile} isOpen={isOpen}>
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
				<NavigationList classpropname={`${listClassName} authorization_buttons`}>
					<NavigationItem href="/sign-in">
						<Button color="white" size="sm">
							Login
						</Button>
					</NavigationItem>
					<NavigationItem href="/sign-up">
						<Button color="white" size="sm">
							Sign Up
						</Button>
					</NavigationItem>
				</NavigationList>
			</NavigationGroup>
		</SiteNavigation>
	);
};

PublicNavigationContainer.propTypes = {
	handleToggleClick: func.isRequired,
	isMobile: bool.isRequired,
	isOpen: bool.isRequired
};

export default withToggle(withViewportDetection(PublicNavigationContainer));
