import Logo from "components/Logo";
import { PublicNavigationContainer } from "containers/Navigation";
import { PublicConcept } from "components/Layout/Header/Concept";
import Header from "components/Layout/Header";
import { Category } from "components/Category";
import { Search } from "components/Search";
import { Basket } from "components/Basket";

const PublicHeader = () => (
	<header>
		<Header classpropname="Header_access-public">
			<Logo type="white" />
			<PublicNavigationContainer />
		</Header>
		<PublicConcept classpropname="Concept_access-public">
			<Category />
			<Search />
			<Basket />
		</PublicConcept>
	</header>
);

export default PublicHeader;
