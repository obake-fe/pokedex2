import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { App } from "@components/App";

/**
 * Index
 */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root") as HTMLElement
);
