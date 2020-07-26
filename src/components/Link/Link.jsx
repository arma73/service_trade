import { string, bool } from "prop-types";
import NextLink from "next/link";
import clsx from "clsx";

import "./Link.scss";

const Link = ({ classpropname, href, children, prefetch, as, ...rest }) => (
	<NextLink href={href} as={as} prefetch={prefetch}>
		<a className={clsx("Link", classpropname)} {...rest}>
			{children}
		</a>
	</NextLink>
);

Link.propTypes = {
	"as": string,
	"classpropname": string,
	"href": string.isRequired,
	"prefetch": bool
};

Link.defaultProps = {
	"prefetch": false
};

export default Link;
