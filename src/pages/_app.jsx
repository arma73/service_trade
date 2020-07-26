import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { SizesProvider } from "react-sizes";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "theme/Material-UI";
import Store from "store";
import "utils/route-watcher";

import "./styles.scss";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (ctx.isServer) {
			const { sizesFallback } = ctx.req;
			pageProps.sizesFallback = sizesFallback;
		}
		if (Component.getInitialProps) {
			const componentProps = await Component.getInitialProps(ctx);
			pageProps = { ...pageProps, ...componentProps };
		}
		return { pageProps };
	}

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}

	createUrl = router => {
		const { pathname, asPath, query } = router;
		return {
			get "query"() {
				return query;
			},
			get "pathname"() {
				return pathname;
			},
			get "asPath"() {
				return asPath;
			},
			"back": () => {
				router.back();
			},
			"push": (url, as) => router.push(url, as),
			"pushTo": (href, as) => {
				const pushRoute = as ? href : null;
				const pushUrl = as || href;

				return router.push(pushRoute, pushUrl);
			},
			"replace": (url, as) => router.replace(url, as),
			"replaceTo": (href, as) => {
				const replaceRoute = as ? href : null;
				const replaceUrl = as || href;

				return router.replace(replaceRoute, replaceUrl);
			}
		};
	};

	render() {
		const { Component, pageProps, router, store } = this.props;
		const url = this.createUrl(router);
		return (
			<>
				<Head>
					<title>BuyEnjoy</title>
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				</Head>
				<Provider store={store}>
					<SizesProvider config={pageProps.sizesFallback}>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<Component {...pageProps} url={url} />
						</ThemeProvider>
					</SizesProvider>
				</Provider>
			</>
		);
	}
}

export default withRedux(Store)(withReduxSaga(MyApp));
