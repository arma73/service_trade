import { Link } from "react-router-dom";
import Layout from "components/layout";

import "./Page404.scss";

const Page404 = () => (
	<Layout>
		<section className="Error404">
			<h1> You must have requested the wrong address. </h1>
			<Link to="/" className="backLinkError">
				Back
			</Link>
		</section>
	</Layout>
);

export default Page404;
