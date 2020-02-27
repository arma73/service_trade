import { string } from "prop-types";
import clsx from "clsx";

const Section = ({ children, classpropname, maintTitle }) => (
	<section className={clsx(maintTitle, classpropname)}>{children}</section>
);

Section.propTypes = {
	classpropname: string,
	maintTitle: string
};

Section.defaultProps = {
	classpropname: "",
	maintTitle: ""
};

export default Section;
