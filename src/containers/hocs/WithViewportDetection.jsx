import React from "react";
import withSizes from "react-sizes";
import VIEWPORTS from "utils/constants/viewports";
import getDisplayName from "utils/getDisplayName";

const mapSizes = ({ width }) => ({
	"isMobile": width < VIEWPORTS.TABLET,
	"isTablet": width < VIEWPORTS.DESKTOP && width > VIEWPORTS.TABLET,
	"isDesktop": width > VIEWPORTS.DESKTOP
});

const withViewportDetection = WrappedComponent => {
	const ComponentWithViewportDetection = withSizes(mapSizes)(WrappedComponent);

	const HOC = props => <ComponentWithViewportDetection {...props} />;
	HOC.displayName = `withViewportDetection(${getDisplayName(WrappedComponent)})`;

	return HOC;
};

export default withViewportDetection;
