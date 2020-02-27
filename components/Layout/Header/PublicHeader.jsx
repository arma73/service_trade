import Logo from "components/Logo";
import { PublicNavigationContainer } from "containers/Navigation";
import { PublicConcept } from "components/Layout/Header/Concept";
import Header from "components/Layout/Header";
import { Category } from "components/Category";
import { Search } from "components/Search";
import { Cart } from "components/Cart";

const PublicHeader = () => (
	<header>
		<Header classpropname="Header_access-public">
			<Logo type="white" />
			<PublicNavigationContainer />
		</Header>
		<PublicConcept classpropname="Concept_access-public">
			<Category />
			<Search />
			<Cart />
		</PublicConcept>
	</header>
);

export default PublicHeader;
