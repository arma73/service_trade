import * as PropTypes from "prop-types";
import clsx from "clsx";
import Link from "next/link";
/*
 * import DefaultLogo from "./assets/logo-default.svg";
 * import DarkLogo from "./assets/logo-dark.svg";
 */
import WhiteLogo from "./assets/logo-white.svg";

import "./Logo.scss";

const LogoImage = {
	/*
	 * "default": DefaultLogo,
	 * "dark": DarkLogo,
	 */
	white: WhiteLogo
};

const Logo = ({ type }) => (
	<div className={clsx("Logo", type)}>
		<Link href="/">
			<a>
				<img src={LogoImage[type]} alt="" />
			</a>
		</Link>
	</div>
);

Logo.defaultProps = {
	type: "default"
};

Logo.propTypes = {
	type: PropTypes.oneOf(["default", "white", "dark"])
};

export default Logo;
