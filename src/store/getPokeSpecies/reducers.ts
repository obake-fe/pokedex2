import * as types from "./types";
import * as actions from "./actions";

export type NormalizedPokeSpeciesType = {
	id: number;
	name: { ja: string; en: string };
	flavor_text_entries: { ja: string; en: string };
	genera: { ja: string; en: string };
};

export const initialState: NormalizedPokeSpeciesType = {
	id: 0,
	name: { ja: "", en: "" },
	flavor_text_entries: { ja: "", en: "" },
	genera: { ja: "", en: "" }
};

/** searchName */
export const searchNameGetPokeSpeciesReducer = (
	state = initialState,
	action: actions.SearchNameActionTypes
): NormalizedPokeSpeciesType => {
	switch (action.type) {
		case types.SEARCH_NAME_STARTED:
			return { ...state, ...action.payload };
		case types.SEARCH_NAME_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_NAME_FAILED:
			return { ...state };
		case types.SEARCH_NAME_RESET:
			return initialState;
		default:
			return state;
	}
};

/** searchType */
export const searchTypeGetPokeSpeciesReducer = (
	state = initialState,
	action: actions.SearchTypeActionTypes
): NormalizedPokeSpeciesType => {
	switch (action.type) {
		case types.SEARCH_TYPE_STARTED:
			return { ...state, ...action.payload };
		case types.SEARCH_TYPE_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_TYPE_FAILED:
			return { ...state };
		case types.SEARCH_TYPE_RESET:
			return initialState;
		default:
			return state;
	}
};

/** searchPartner */
export const searchPartnerGetPokeSpeciesReducer = (
	state = initialState,
	action: actions.SearchPartnerActionTypes
): NormalizedPokeSpeciesType => {
	switch (action.type) {
		case types.SEARCH_PARTNER_STARTED:
			return { ...state, ...action.payload };
		case types.SEARCH_PARTNER_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_PARTNER_FAILED:
			return { ...state };
		case types.SEARCH_PARTNER_RESET:
			return initialState;
		default:
			return state;
	}
};
