import { bool, func } from "prop-types";
import clsx from "clsx";
import Toggle from "./Toggle";

const SiteNavigation = ({ children, handleToggleClick, isMobile, isOpen }) => {
	const navWrapClassName = clsx("nav-wrap", {
		"open": isOpen
	});

	return (
		<div className={navWrapClassName}>
			{isMobile && <Toggle handleClick={handleToggleClick} />}
			{children}
		</div>
	);
};

SiteNavigation.propTypes = {
	"handleToggleClick": func,
	"isMobile": bool,
	"isOpen": bool
};

SiteNavigation.defaultProps = {
	"handleToggleClick": () => {},
	"isMobile": false,
	"isOpen": true
};

export default SiteNavigation;
