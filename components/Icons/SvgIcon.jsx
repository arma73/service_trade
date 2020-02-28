/*eslint-disable max-lines*/
import { string, oneOfType, number } from "prop-types";
import clsx from "clsx";
import ArrowDown from "./icons/ArrowDown";
import Attach from "./icons/Attach";
import Check from "./icons/Check";
import JobEntry from "./icons/JobEntry";
import JobIntermediate from "./icons/JobIntermediate";
import JobExpert from "./icons/JobExpert";
import DurationWeek from "./icons/DurationWeek";
import DurationMonth from "./icons/DurationMonth";
import DurationQuarterYear from "./icons/DurationQuarterYear";
import DurationHalfYear from "./icons/DurationHalfYear";
import DurationYear from "./icons/DurationYear";
import Close from "./icons/Close";
import Search from "./icons/Search";
import NavLeft from "./icons/NavLeft";
import NavRight from "./icons/NavRight";
import Star from "./icons/Star";
import Basket from "./icons/Basket";

import "./SvgIcon.scss";

const SvgIcon = ({ icon, size, color, className, ...rest }) => {
	let IconComponent;
	switch (icon) {
		case "star": {
			IconComponent = Star;
			break;
		}
		case "nav-left": {
			IconComponent = NavLeft;
			break;
		}
		case "nav-right": {
			IconComponent = NavRight;
			break;
		}
		case "close": {
			IconComponent = Close;
			break;
		}
		case "arrow-down": {
			IconComponent = ArrowDown;
			break;
		}
		case "attach": {
			IconComponent = Attach;
			break;
		}
		case "check": {
			IconComponent = Check;
			break;
		}
		case "job-entry": {
			IconComponent = JobEntry;
			break;
		}
		case "job-intermediate": {
			IconComponent = JobIntermediate;
			break;
		}
		case "job-expert": {
			IconComponent = JobExpert;
			break;
		}
		case "duration-week": {
			IconComponent = DurationWeek;
			break;
		}
		case "duration-month": {
			IconComponent = DurationMonth;
			break;
		}
		case "duration-quarter-year": {
			IconComponent = DurationQuarterYear;
			break;
		}
		case "duration-half-year": {
			IconComponent = DurationHalfYear;
			break;
		}
		case "duration-year": {
			IconComponent = DurationYear;
			break;
		}
		case "search": {
			IconComponent = Search;
			break;
		}
		case "basket": {
			IconComponent = Basket;
			break;
		}
		default:
			return null;
	}

	return (
		<IconComponent
			className={clsx("SvgIcon", className)}
			width={size}
			height={size}
			fill={color}
			{...rest}
		/>
	);
};

SvgIcon.propTypes = {
	className: string,
	color: string,
	icon: string,
	size: oneOfType([string, number])
};

SvgIcon.defaultProps = {
	color: "#ffffff",
	size: "25px"
};

export default SvgIcon;
