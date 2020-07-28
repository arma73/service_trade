import { Route, Switch } from "react-router-dom";
import { mapRoutes, authorizationRoutes } from "./listRoutes";

import "theme/global.scss";

const Routes = () => {
	const pageRoutes = [
		...mapRoutes.map(item => (
			<Route exact={item.exact} path={item.url} component={item.component} key={item.url} data-name={item.name} />
		)),
		...authorizationRoutes.map(item => (
			<Route exact={item.exact} path={item.url} component={item.component} key={item.url} data-name={item.name} />
		)),
	];

	return <Switch> {pageRoutes} </Switch>;
};

export default Routes;
