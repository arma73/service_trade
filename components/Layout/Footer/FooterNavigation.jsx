import { string } from "prop-types";
import { NavigationList } from "components/Navigation";

const FooterNavigation = ({ children, title }) => (
	<div className="list-item">
		{title && <h5>{title}</h5>}
		<NavigationList>{children}</NavigationList>
	</div>
);

FooterNavigation.propTypes = {
	title: string
};

FooterNavigation.defaultProps = {
	title: ""
};

export default FooterNavigation;
