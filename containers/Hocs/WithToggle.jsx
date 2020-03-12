import { useState } from "react";
import getDisplayName from "utils/getDisplayName";

const withToggle = WrappedComponent => {
	const HOC = props => {
		const [isOpen, setIsOpen] = useState(false);

		const handleToggleClick = () => setIsOpen(!isOpen);

		return (
			<WrappedComponent {...props} handleToggleClick={handleToggleClick} isOpen={isOpen} />
		);
	};

	HOC.displayName = `withToggle(${getDisplayName(WrappedComponent)})`;

	return HOC;
};

export default withToggle;
