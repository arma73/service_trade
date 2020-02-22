import { applyMiddleware, Middleware } from "redux";
import getConfig from "next/config";
import configureStore, { ReducerEnhancedStore } from "utils/redux/configureStore";
import commonReducers from "store/reducers";
import rootSaga from "store/sagas";

export type Store = ReducerEnhancedStore;

const { publicRuntimeConfig } = getConfig();
const { isProd } = publicRuntimeConfig;

const enhancer = (...middlewareArray: Middleware[]) => {
	if (isProd) {
		return applyMiddleware(...middlewareArray);
	}
	const { composeWithDevTools } = require("redux-devtools-extension");
	return composeWithDevTools(applyMiddleware(...middlewareArray));
};

const initStore = configureStore({ commonReducers, enhancer, rootSaga });

export default initStore;
