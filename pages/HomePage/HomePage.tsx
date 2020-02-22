import Head from "next/head";
import { connect } from "react-redux";

import "./HomePage.scss";

//Components
import { PublicLayout } from "components/Layout";
import NProgress from "components/NProgress";

const Home: React.FC = () => (
	<div className="Homepage">
		<Head>
			<title>Home</title>
		</Head>
		<NProgress />
		<PublicLayout>
			<div>PublicLayout &gt; Main</div>
		</PublicLayout>
	</div>
);

export default connect()(Home);
