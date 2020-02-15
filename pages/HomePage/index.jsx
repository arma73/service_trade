import Head from "next/head";
import { connect } from "react-redux";

import "./HomePage.scss";

//Components
import PublicLayout from "Layout";
import NProgress from "components/NProgress";

const Home = () => (
	<div className="Homepage">
		<Head>
			<title>Home</title>
		</Head>
		<NProgress />
		<PublicLayout>
			<div>PublicLayout</div>
		</PublicLayout>
	</div>
);

export default connect()(Home);
