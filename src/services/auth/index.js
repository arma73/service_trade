import React from "react";
import { withRouter } from "react-router-dom";
import Cookie from "js-cookie";
import { removeAuthorizationHeader, setAuthorizationHeader, verifyAccessTokenResponse } from "services/api";
import { verifyAccessTokenURI } from "services/URI";
import { setLocal, getLocal, removeLocal, clearSession } from "utils/storage";

const auth = async history => {
	const { token } = Cookie.get();
	const { pathname } = history.location;
	if (!token) {
		if (pathname !== "/logIn") logout(history);
	} else {
		setAuthorizationHeader(token);
		if (pathname === "/logIn") {
			history.push("/");
		} else {
			const verify = await verifyAccessToken(history);
			if (!verify) {
				logout(history);
			}
		}
	}

	return token;
};

const verifyAccessToken = async () => {
	const user = getLocal("_u");
	if (!user) return false;
	try {
		const response = await verifyAccessTokenResponse(verifyAccessTokenURI)();
		if (response.status >= 400) {
			return false;
		}
	} catch (e) {
		return false;
	}

	return true;
};

export const login = async ({ token, redirectUrl = "/", user }, history) => {
	Cookie.set("token", token, { "expires": 1 });
	setLocal("_u", user);
	history.push(redirectUrl);
};

export const logout = async history => {
	removeAuthorizationHeader();
	removeLocal("_u");
	Cookie.remove("token");
	clearSession();
	history.push("/logIn");
};

export const withAuthSync = WrappedComponent => {
	class AuthVerify extends React.Component {
		static displayName = `withAuthSync(${WrappedComponent.name || "Component"})`;
		state = {};

		static async getDerivedStateFromProps(props) {
			const token = await auth(props.history);

			if (token) {
				return { token };
			}
			return null;
		}

		constructor(props) {
			super(props);

			this.syncLogout = this.syncLogout.bind(this);
		}

		componentDidMount() {
			window.addEventListener("storage", this.syncLogout);
		}

		componentWillUnmount() {
			window.removeEventListener("storage", this.syncLogout);
		}

		syncLogout(event) {
			if (event.key === "_u") {
				logout(this.props.history);
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	return withRouter(AuthVerify);
};
