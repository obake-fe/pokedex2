import { Dispatch } from "react";
import * as actions from "./actions";

/** searchName */
export const searchNameGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.SearchNameActionTypes>
) => (no: number): void => {
	if (!no) return;
	dispatch(actions.searchNameResetData());
	dispatch(actions.searchNameFetchStarted(no));
};

/** searchType */
export const searchTypeGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.SearchTypeActionTypes>
) => (no: number): void => {
	dispatch(actions.searchTypeResetData());
	if (!no) return;
	dispatch(actions.searchTypeFetchStarted(no));
};

/** searchPartner */
export const searchPartnerGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.SearchPartnerActionTypes>
) => (no: number): void => {
	if (!no) return;
	dispatch(actions.searchPartnerResetData());
	dispatch(actions.searchPartnerFetchStarted(no));
};
