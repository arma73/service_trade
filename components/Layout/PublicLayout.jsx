import ChatIcon from "components/Icons/ChatIcon";
import Layout from "./Layout";
import PublicHeader from "./Header/PublicHeader";
import PublicFooter from "./Footer/PublicFooter";
import Main from "./Main";

const PublicLayout = ({ children }) => (
	<Layout>
		<PublicHeader />
		<Main>{children}</Main>
		<ChatIcon />
		<PublicFooter />
	</Layout>
);

export default PublicLayout;
