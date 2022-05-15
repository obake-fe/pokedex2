import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { App } from "@components/App";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
	dsn:
		"https://2c09bc895e0b4e5fab1f2dd1be9a7b31@o1247257.ingest.sentry.io/6407243",
	integrations: [new BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0
});

/**
 * Index
 */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root") as HTMLElement
);
