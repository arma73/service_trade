import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const NProgressUI = () => (
	<div>
		<Head>
			<link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
		</Head>
	</div>
);

export default NProgressUI;
