import * as PropTypes from "prop-types";
import classNames from "class-names";
import Link from "next/link";
import DefaultLogo from "./assets/logo-default.svg";
import WhiteLogo from "./assets/logo-white.svg";
import DarkLogo from "./assets/logo-dark.svg";

import "./Logo.scss";

const LogoImage = {
	"default": DefaultLogo,
	"white": WhiteLogo,
	"dark": DarkLogo
};

const Logo = ({ type }) => (
	<div className={classNames("Logo", type)}>
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
