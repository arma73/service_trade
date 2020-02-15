import * as PropTypes from "prop-types";
import NextLink from "next/link";
import classNames from "class-names";

import "./Link.scss";

const Link = ({ className, href, children, prefetch, as, ...rest }) => (
	<NextLink href={href} as={as} prefetch={prefetch}>
		<a className={classNames("Link", className)} {...rest}>
			{children}
		</a>
	</NextLink>
);

Link.propTypes = {
	as: PropTypes.string,
	href: PropTypes.string.isRequired,
	prefetch: PropTypes.bool
};

Link.defaultProps = {
	prefetch: false
};

export default Link;
