import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./routes";

const App = () => (
	<BrowserRouter>
		<Route path="/" component={Routes} />
	</BrowserRouter>
);

ReactDOM.render(<App />, document.querySelector("#app"));
