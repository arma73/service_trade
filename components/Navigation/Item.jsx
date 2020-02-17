import { string } from "prop-types";
import Link from "components/Link";

const NavigationItem = ({ children, href, as, classpropname }) => (
	<li className="navigation-item">
		<Link href={href} as={as} classpropname={classpropname}>
			{children}
		</Link>
	</li>
);

NavigationItem.propTypes = {
	as: string,
	classpropname: string,
	href: string.isRequired
};

export default NavigationItem;
