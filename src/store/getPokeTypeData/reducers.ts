import * as types from "./types";
import * as actions from "./actions";

export type NormalizedPokeTypeDataType = {
	type: string;
	no: number;
	pokemon: { name: { ja: string; en: string }; no: number }[];
};

export type GetPokeTypeDataType = {
	type1: NormalizedPokeTypeDataType;
	type2: NormalizedPokeTypeDataType;
};

export const initialState: GetPokeTypeDataType = {
	type1: {
		type: "",
		no: 0,
		pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
	},
	type2: {
		type: "",
		no: 0,
		pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
	}
};

export const searchTypeGetPokeTypeDataReducer = (
	state = initialState,
	action: actions.TypeActionTypes
): GetPokeTypeDataType => {
	switch (action.type) {
		case types.POKE_TYPE1_STARTED:
			return { ...state, type1: { type: "", no: action.payload, pokemon: [] } };
		case types.POKE_TYPE1_SUCCESS:
			return { ...state, type1: { ...action.payload } };
		case types.POKE_TYPE1_FAILED:
			return { ...state };
		case types.POKE_TYPE2_STARTED:
			return { ...state, type2: { type: "", no: action.payload, pokemon: [] } };
		case types.POKE_TYPE2_SUCCESS:
			return { ...state, type2: { ...action.payload } };
		case types.POKE_TYPE2_FAILED:
			return { ...state };
		case types.POKE_TYPE1_RESET:
			return {
				...state,
				type1: {
					type: "",
					no: 0,
					pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
				}
			};
		case types.POKE_TYPE2_RESET:
			return {
				...state,
				type2: {
					type: "",
					no: 0,
					pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
				}
			};
		default:
			return state;
	}
};
