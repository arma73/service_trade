/*eslint-disable max-lines */
import { Store, Action, AnyAction } from "redux";
import { NextPageContext, NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import defaultConfig, { Config } from "./defaultConfig";
import objectAssign from "utils/common/objectAssign";

export interface StoreProps<S = Store> {
	store: S;
}

export interface WithStorePageContext<S = Store> extends NextPageContext, StoreProps<S> {
	isServer: boolean;
}

export interface WithStoreAppContext<S = Store> extends AppContext {
	ctx: WithStorePageContext<S>;
}

export interface MakeStoreOptions<S = Store> extends Config, WithStorePageContext<S> {}

export interface MakeStore<S = Store> {
	(initialState: any, options?: Partial<MakeStoreOptions<S>>): S;
}

export interface InitStoreOptions<S = Store> {
	initialState?: any;
	ctx?: WithStorePageContext<S>;
}

export interface WrappedAppProps {
	initialProps: any; //stuff returned from getInitialProps
	initialState: any; //stuff in the Store state after getInitialProps
	isServer: boolean;
}

export interface TransformedAppProps<S = Store, P = {}> extends StoreProps<S>, AppProps<P> {}

export type TransformedApp<S = Store, P = {}, IP = P> = NextComponentType<
	AppContext,
	IP,
	TransformedAppProps<S, P>
>;

function withRedux<A extends Action = AnyAction, S extends Store<any, A> = Store<any, A>>(
	makeStore: MakeStore<S>,
	optionalConfig: Partial<Config> = {}
) {
	const config: Config = objectAssign()(
		defaultConfig,
		{ isServer: typeof window === "undefined" },
		optionalConfig
	);
	const { storeKey, isServer, deserializeState, serializeState } = config;

	const serveStore = ({ initialState, ctx }: InitStoreOptions<S>): S => {
		const createStore = () => makeStore(
			deserializeState(initialState), {
				...ctx,
				...config
			}
		);

		//always create store if server
		if (isServer) return createStore();

		//reuse store if client
		(window as any)[storeKey] = (window as any)[storeKey] || createStore();

		return (window as any)[storeKey];
	};

	return (App: TransformedApp<S, any>) => {
		const WrappedApp: NextComponentType<
			WithStoreAppContext<S>,
			WrappedAppProps,
			WrappedAppProps
		//eslint-disable-next-line react/prop-types
		> = ({ initialProps, initialState, ...props }) => {
			const storeProp = serveStore({ initialState });
			return <App {...props} {...initialProps} store={storeProp} />;
		};

		WrappedApp.getInitialProps = async appCtx => {
			const clearAppCtx = { ...appCtx };

			const store = serveStore({ ctx: clearAppCtx.ctx });
			clearAppCtx.ctx.store = store;
			clearAppCtx.ctx.isServer = isServer;

			let initialProps = {};
			if (App.getInitialProps) {
				initialProps = await App.getInitialProps.call(App, clearAppCtx);
			}

			return {
				isServer,
				initialState: serializeState(store.getState()),
				initialProps
			};
		};

		return WrappedApp;
	};
}

export default withRedux;
