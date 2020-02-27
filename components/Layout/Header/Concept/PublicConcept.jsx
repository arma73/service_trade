import { string } from "prop-types";
import clsx from "clsx";

const PublicConcept = ({ children, classpropname }) => (
	<section className={clsx("Concept", classpropname)}>{children}</section>
);

PublicConcept.propTypes = {
	classpropname: string
};

export default PublicConcept;
