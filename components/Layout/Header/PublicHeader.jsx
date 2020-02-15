import Logo from "components/Logo";
import { PublicNavigationContainer } from "containers/Navigation";
import Header from "components/Layout/Header";

const PublicHeader = () => (
	<Header className="Header_access-public">
		<Logo type="white" />
		<PublicNavigationContainer />
	</Header>
);

export default PublicHeader;
