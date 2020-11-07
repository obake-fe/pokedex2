import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { App } from "@components/App";
import "@styles/reset.css";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root") as HTMLElement
);
