import * as types from "./types";
import * as actions from "./actions";

export type normalizedPokeDataType = {
	id: number;
	name: string;
	stats: { base_stat: number }[];
	types: { ja: string; en: string }[];
};

export const initialState: normalizedPokeDataType = {
	id: 0,
	name: "",
	stats: [
		{ base_stat: 0 },
		{ base_stat: 0 },
		{ base_stat: 0 },
		{ base_stat: 0 },
		{ base_stat: 0 },
		{ base_stat: 0 }
	],
	types: [
		{ ja: "", en: "" },
		{ ja: "", en: "" }
	]
};

/** searchName */
export const searchNameGetPokeDataReducer = (
	state = initialState,
	action: actions.searchNameActionTypes
): normalizedPokeDataType => {
	switch (action.type) {
		case types.SEARCH_NAME_STARTED:
			return { ...state, ...action.payload };
		case types.SEARCH_NAME_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_NAME_FAILED:
			return { ...state };
		default:
			return state;
	}
};

/** searchType */
export const searchTypeGetPokeDataReducer = (
	state = initialState,
	action: actions.searchTypeActionTypes
): normalizedPokeDataType => {
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
export const searchPartnerGetPokeDataReducer = (
	state = initialState,
	action: actions.searchPartnerActionTypes
): normalizedPokeDataType => {
	switch (action.type) {
		case types.SEARCH_PARTNER_STARTED:
			return { ...state, ...action.payload };
		case types.SEARCH_PARTNER_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_PARTNER_FAILED:
			return { ...state };
		default:
			return state;
	}
};
