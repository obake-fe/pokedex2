import { VFC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Index } from "@components/pages/Index";
import { SearchPartner } from "@components/pages/SearchPartner";
import { SearchType } from "@components/pages/SearchType";
import { SearchName } from "@components/pages/SearchName";

/**
 * Routing component
 */
export const App: VFC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/pokemon" component={SearchName} />
				<Route path="/type" component={SearchType} />
				<Route path="/partner" component={SearchPartner} />
				<Route path="/" component={Index} />
			</Switch>
		</BrowserRouter>
	);
};
