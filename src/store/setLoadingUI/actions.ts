import * as types from "./types";

export const setLoadingUI = (state: boolean) =>
	({
		type: types.SET_LOADING_UI,
		payload: {
			state
		}
	} as const);

export type ActionTypes = ReturnType<typeof setLoadingUI>;
