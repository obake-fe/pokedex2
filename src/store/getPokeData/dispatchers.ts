import { Dispatch } from "react";
import * as actions from "./actions";

/** searchName */
export const searchNameGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.SearchNameActionTypes>
) => (no: number): void => {
	dispatch(actions.searchNameResetData());
	dispatch(actions.searchNameFetchStarted(no));
};

/** searchType */
export const searchTypeGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.SearchTypeActionTypes>
) => (no: number): void => {
	dispatch(actions.searchTypeResetData());
	if (!no) return;

	dispatch(actions.searchTypeFetchStarted(no));
};

/** searchPartner */
export const searchPartnerGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.SearchPartnerActionTypes>
) => (no: number): void => {
	dispatch(actions.searchPartnerResetData());
	dispatch(actions.searchPartnerFetchStarted(no));
};
