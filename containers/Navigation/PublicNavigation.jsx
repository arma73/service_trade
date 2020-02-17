import { bool, func } from "prop-types";
import class_names from "class-names";
import { NavigationItem, NavigationList } from "components/Navigation";
import SiteNavigation from "components/Layout/Header/SiteNavigation";
import { Button } from "components/Form";
import withViewportDetection from "containers/Hocs/WithViewportDetection";
import withToggle from "containers/Hocs/WithToggle";

const PublicNavigationContainer = ({ handleToggleClick, isMobile, isOpen }) => {
	const navClassName = class_names("Navigation", {
		mobile: isMobile
	});

	return (
		<SiteNavigation handleToggleClick={handleToggleClick} isMobile={isMobile} isOpen={isOpen}>
			<NavigationList classpropname={navClassName}>
				<NavigationItem href="/our-magazine">Our Magazine</NavigationItem>
				<NavigationItem href="/handtohand/handtohand" as="/handtohand/1">
					Hand To Hand
				</NavigationItem>
				<NavigationItem href="/wholesale/wholesale" as="/wholesale/1">
					WholeSale
				</NavigationItem>
				<NavigationItem href="/activity">Activity</NavigationItem>
				<NavigationItem href="/sign-in" classpropname="sign-in">
					Login
				</NavigationItem>
				<NavigationItem href="/sign-up">
					<Button color="white" size="sm">
						Sign Up
					</Button>
				</NavigationItem>
			</NavigationList>
		</SiteNavigation>
	);
};

PublicNavigationContainer.propTypes = {
	handleToggleClick: func.isRequired,
	isMobile: bool.isRequired,
	isOpen: bool.isRequired
};

export default withToggle(withViewportDetection(PublicNavigationContainer));
