import Logo from "components/Logo";
import { PublicNavigationContainer } from "containers/Navigation";
import { DetectMobile } from "containers/Detect";
import { PublicConcept } from "components/Layout/Header/Concept";
import Header from "components/Layout/Header";
import { Category } from "components/Category";
import { Search } from "components/Search";
import { Basket } from "components/Basket";
import { TemporaryDrawer } from "components/Drawer";

import CategoriesMocks from "mocks/CategoriesMocks";

import clsx from "clsx";

const HeaderConcepts = ({ isMobile }) => {
	const ConceptName = clsx("Concept_access-public", {
		"mobile": isMobile
	});

	return (
		<PublicConcept classpropname={ConceptName}>
			{isMobile ? <TemporaryDrawer Mocks={CategoriesMocks} /> : <Category CategoriesMocks={CategoriesMocks} />}
			<Search />
			<Basket />
		</PublicConcept>
	);
};

const PublicHeader = () => (
	<header>
		<Header classpropname="Header_access-public">
			<Logo type="white" />
			<PublicNavigationContainer />
		</Header>
		<DetectMobile Component={HeaderConcepts} />
	</header>
);

export default PublicHeader;
