import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux, { StoreProps } from "utils/redux/withRedux";
import { ActionWithPayload } from "utils/redux/types";
import withReduxSaga from "utils/redux/withReduxSaga";
import { SizesProvider } from "react-sizes";
import initStore, { Store } from "store";
import "utils/route-watcher";

import "./styles.scss";

class MyApp extends App<StoreProps<Store>> {
	/*
	 * static async getInitialProps({ Component, ctx }) {
	 * let pageProps = {};
	 * if (ctx.isServer) {
	 * const { sizesFallback } = ctx.req;
	 * pageProps.sizesFallback = sizesFallback;
	 * }
	 * if (Component.getInitialProps) {
	 * const componentProps = await Component.getInitialProps(ctx);
	 * pageProps = { ...pageProps, ...componentProps };
	 * }
	 * return { pageProps };
	 * }
	 */

	createUrl = (router: any) => {
		const { pathname, asPath, query } = router;
		return {
			get query() {
				return query;
			},
			get pathname() {
				return pathname;
			},
			get asPath() {
				return asPath;
			},
			back: () => {
				router.back();
			},
			push: (url: any, as: any) => router.push(url, as),
			pushTo: (href: any, as: any) => {
				const pushRoute = as ? href : null;
				const pushUrl = as || href;

				return router.push(pushRoute, pushUrl);
			},
			replace: (url: any, as: any) => router.replace(url, as),
			replaceTo: (href: any, as: any) => {
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
			<Container>
				<Provider store={store}>
					<SizesProvider config={pageProps.sizesFallback}>
						<Component {...pageProps} url={url} />
					</SizesProvider>
				</Provider>
			</Container>
		);
	}
}

export default withRedux<ActionWithPayload, Store>(initStore)(
	withReduxSaga<ActionWithPayload, Store>(MyApp)
);
