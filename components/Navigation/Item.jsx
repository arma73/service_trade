import { string } from "prop-types";
import Link from "components/Link";

const NavigationItem = ({ children, href, as, className }) => (
	<li className="navigation-item">
		<Link href={href} as={as} className={className}>
			{children}
		</Link>
	</li>
);

NavigationItem.propTypes = {
	as: string,
	href: string.isRequired
};

export default NavigationItem;
